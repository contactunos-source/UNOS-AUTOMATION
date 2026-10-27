"use client";

import { useEffect, useState } from "react";
import { siteConfig } from "@/lib/config";
import {
  motion,
  useReducedMotion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

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

  // Mouse Tracking & Ultra-Smooth Spring Physics for Robot Character
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [isMobile, setIsMobile] = useState(false);

  // Awwwards-grade spring physics (smooth, natural, lifelike inertia)
  const springConfig = { damping: 22, stiffness: 110, mass: 0.7 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // 3D Head & Torso Rotation and Parallax
  const rotateY = useTransform(smoothX, [-1, 1], [-14, 14]); // Turns head left / right
  const rotateX = useTransform(smoothY, [-1, 1], [7, -7]); // Looks up / down naturally
  const rotateZ = useTransform(smoothX, [-1, 1], [-2.8, 2.8]); // Organic body lean into the movement
  const translateX = useTransform(smoothX, [-1, 1], [-15, 15]); // Subtle horizontal translation
  const translateY = useTransform(smoothY, [-1, 1], [-8, 8]); // Subtle vertical translation

  // Dynamic Contact Shadow beneath feet (reacts to body weight shift & tilt)
  const shadowX = useTransform(smoothX, [-1, 1], [-8, 8]);
  const shadowScaleX = useTransform(smoothX, [-1, 0, 1], [1.08, 1, 1.08]);
  const shadowOpacity = useTransform(smoothY, [-1, 1], [0.10, 0.16]);

  // Ambient Cyan Eye Aura Parallax (depth layering behind the character)
  const glowX = useTransform(smoothX, [-1, 1], [-20, 20]);
  const glowY = useTransform(smoothY, [-1, 1], [-16, 16]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const checkMobile = () => {
      const isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
      setIsMobile(isTouch || window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile, { passive: true });

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined" || isMobile || shouldReduceMotion) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX - innerWidth / 2) / (innerWidth / 2);
      const y = (e.clientY - innerHeight / 2) / (innerHeight / 2);
      mouseX.set(Math.max(-1, Math.min(1, x)));
      mouseY.set(Math.max(-1, Math.min(1, y)));
    };

    const handleMouseLeave = () => {
      mouseX.set(0);
      mouseY.set(0);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isMobile, shouldReduceMotion, mouseX, mouseY]);

  // Incoming English words (traveling along the blue line from far-left to left ear)
  const incomingWords = [
    { text: "AI Voice Intelligence", duration: 7.0, delay: 0 },
    { text: "Autonomous Workflows", duration: 7.8, delay: 2.2 },
    { text: "Real-Time Data Stream", duration: 7.2, delay: 4.4 },
    { text: "Neural Intent Core", duration: 7.5, delay: 6.2 },
  ];

  // Reference-exact voice equalizer waveform pattern (continuous across full right side)
  const baseWavePattern = [
    { h: 46, w: 3.5 },
    { h: 64, w: 3.5 },
    { h: 36, w: 3.5 },
    { h: 10, w: 3.5 },
    { h: 10, w: 3.5 },
    { h: 44, w: 3.5 },
    { h: 74, w: 4 },
    { h: 38, w: 3.5 },
    { h: 18, w: 3.5 },
    { h: 22, w: 3.5 },
    { h: 42, w: 3.5 },
    { h: 58, w: 3.5 },
    { h: 78, w: 4 },
    { h: 68, w: 3.5 },
    { h: 54, w: 3.5 },
    { h: 44, w: 3.5 },
    { h: 60, w: 3.5 },
    { h: 72, w: 4 },
    { h: 52, w: 3.5 },
    { h: 36, w: 3.5 },
  ];

  // Repeat sequence across the full laptop width (~80 bars)
  const refWaveBars = [
    ...baseWavePattern,
    ...baseWavePattern,
    ...baseWavePattern,
    ...baseWavePattern,
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

      {/* ─── Center: AI Agent Character with Full-Width Ear-to-Ear Transmission Flow ─── */}
      <div className="relative z-10 w-full my-auto py-2 sm:py-4 flex items-center justify-center select-none overflow-visible">
        
        {/* Ambient Cyan / Aqua Glow matching AI Agent Eyes with Parallax Depth */}
        <motion.div
          aria-hidden="true"
          style={
            !isMobile && !shouldReduceMotion
              ? { x: glowX, y: glowY }
              : undefined
          }
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 sm:w-88 lg:w-[450px] h-72 sm:h-88 lg:h-[450px] bg-cyan-400/10 rounded-full blur-3xl pointer-events-none -z-10"
        />

        {/* ── Central Robot Anchor Wrapper ── */}
        <div className="relative inline-flex flex-col items-center justify-center">

          {/* ══════════════════════════════════════════════════════════════
              LEFT SIDE: CONTINUOUS BLUE LINE + INCOMING WORDS TO LEFT EAR
              Directly aligned with robot's LEFT EAR (not the eye).
              Words disappear precisely at the left ear beacon.
             ══════════════════════════════════════════════════════════════ */}
          <div
            aria-hidden="true"
            className="absolute top-[22%] -translate-y-1/2 right-[94.5%] w-[46vw] max-w-[850px] h-36 sm:h-44 lg:h-52 pointer-events-none flex items-center justify-end overflow-hidden z-20"
          >
            {/* The Clearly Visible Blue Transmission Waveform Line */}
            <svg
              className="absolute inset-0 w-full h-full overflow-visible"
              viewBox="0 0 1000 200"
              preserveAspectRatio="none"
              fill="none"
            >
              <defs>
                {/* Vivid electric blue gradient with glowing cyan highlights */}
                <linearGradient id="vividBlueLineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#0284c7" stopOpacity="0.4" />
                  <stop offset="30%" stopColor="#0ea5e9" stopOpacity="0.9" />
                  <stop offset="75%" stopColor="#06b6d4" stopOpacity="1" />
                  <stop offset="100%" stopColor="#22d3ee" stopOpacity="1" />
                </linearGradient>

                {/* Soft ambient glow filter */}
                <filter id="blueLineGlow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* Faint subtle carrier guide */}
              <line
                x1="0"
                y1="100"
                x2="1000"
                y2="100"
                stroke="#e2e8f0"
                strokeWidth="1"
                strokeDasharray="4 6"
              />

              {/* Flowing Secondary Ambient Wave */}
              <path
                d="M 0,100 C 150,75 300,125 450,100 C 600,80 750,120 900,100 L 1000,100"
                stroke="#38bdf8"
                strokeWidth="1.5"
                strokeDasharray="5 7"
                className="opacity-40"
              />

              {/* PRIMARY PROMINENT BLUE TRANSMISSION WAVEFORM LINE */}
              <motion.path
                d="M 0,100 C 120,65 240,135 360,100 C 480,70 600,130 720,100 C 840,80 940,115 1000,100"
                stroke="url(#vividBlueLineGrad)"
                strokeWidth="3.5"
                strokeLinecap="round"
                filter="url(#blueLineGlow)"
                vectorEffect="non-scaling-stroke"
                animate={
                  shouldReduceMotion
                    ? {}
                    : {
                        d: [
                          "M 0,100 C 120,65 240,135 360,100 C 480,70 600,130 720,100 C 840,80 940,115 1000,100",
                          "M 0,100 C 120,135 240,65 360,100 C 480,130 600,70 720,100 C 840,115 940,80 1000,100",
                          "M 0,100 C 120,75 240,125 360,100 C 480,80 600,120 720,100 C 840,90 940,110 1000,100",
                          "M 0,100 C 120,65 240,135 360,100 C 480,70 600,130 720,100 C 840,80 940,115 1000,100",
                        ],
                      }
                }
                transition={{
                  duration: 5.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </svg>

            {/* Animated English Words: Travel directly to robot's left ear and disappear */}
            {!shouldReduceMotion ? (
              incomingWords.map((item, idx) => (
                <motion.div
                  key={`word-${idx}`}
                  className="absolute left-0 top-1/2 flex items-center gap-1.5 sm:gap-2 px-2 py-0.5 sm:px-3 sm:py-1 rounded-full bg-white/95 border sm:border-2 border-sky-400/80 text-neutral-800 shadow-md backdrop-blur-sm z-20"
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{
                    x: ["-10%", "360%"],
                    y: ["-50%", "-85%", "-25%", "-75%", "-50%"],
                    opacity: [0, 1, 1, 0.85, 0],
                  }}
                  transition={{
                    duration: item.duration,
                    delay: item.delay,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-sky-500 animate-pulse" />
                  <span className="text-[10px] sm:text-xs md:text-sm font-semibold tracking-wide font-sans text-neutral-900 whitespace-nowrap">
                    {item.text}
                  </span>
                </motion.div>
              ))
            ) : (
              // Static Fallback for Reduced Motion
              <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-1 items-end z-20">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] sm:text-xs font-semibold bg-white border border-sky-400 text-neutral-800 shadow-xs">
                  AI Voice Intelligence
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-[9px] sm:text-[11px] font-semibold bg-white border border-sky-300 text-neutral-700 shadow-xs">
                  Autonomous Workflows
                </span>
              </div>
            )}
          </div>

          {/* ══════════════════════════════════════════════════════════════
              CENTER: AI AGENT CHARACTER WITH 3D MOUSE TRACKING & LEAN
             ══════════════════════════════════════════════════════════════ */}
          <motion.div
            style={
              !isMobile && !shouldReduceMotion
                ? {
                    rotateY,
                    rotateX,
                    rotateZ,
                    x: translateX,
                    y: translateY,
                    transformPerspective: 1200,
                    transformOrigin: "50% 80%",
                  }
                : undefined
            }
            className="relative flex items-center justify-center z-10 hardware-accelerated pointer-events-none"
          >
            {/* Subtle Lifelike Ambient Breathing Floating Layer */}
            <motion.div
              animate={
                shouldReduceMotion
                  ? {}
                  : {
                      y: [0, -5, 0],
                    }
              }
              transition={{
                duration: 4.4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative flex items-center justify-center"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <picture>
                <source srcSet="/images/ai-agent.webp" type="image/webp" />
                <img
                  src="/images/ai-agent.png"
                  alt="UNOS Autonomous AI Agent"
                  className="h-[230px] xs:h-[260px] sm:h-[310px] md:h-[350px] lg:h-[390px] xl:h-[410px] w-auto max-w-[85vw] object-contain drop-shadow-sm select-none"
                  loading="eager"
                  draggable={false}
                />
              </picture>
            </motion.div>
          </motion.div>

          {/* Soft Realistic Contact Shadow beneath robot feet with dynamic squash & shift */}
          <motion.div
            aria-hidden="true"
            style={
              !isMobile && !shouldReduceMotion
                ? {
                    x: shadowX,
                    scaleX: shadowScaleX,
                    opacity: shadowOpacity,
                  }
                : undefined
            }
            className="w-36 sm:w-48 lg:w-56 h-3 sm:h-4 bg-neutral-900/12 rounded-full blur-md -mt-1 sm:-mt-2 pointer-events-none"
          />

          {/* ══════════════════════════════════════════════════════════════
              RIGHT SIDE: CONTINUOUS BLACK-AND-WHITE VOICE WAVEFORM
              Starts directly from robot's RIGHT EAR (not near the eye).
              Extends outward to the far-right edge.
             ══════════════════════════════════════════════════════════════ */}
          <div
            aria-hidden="true"
            className="absolute top-[22%] -translate-y-1/2 left-[94.5%] w-[46vw] max-w-[850px] h-36 sm:h-44 lg:h-52 pointer-events-none flex items-center justify-start overflow-hidden z-20"
          >
            {/* Continuous Black-and-White Audio Frequency Waveform Bars (Hardware-Accelerated CSS) */}
            <div className="pl-1 sm:pl-2 flex items-center gap-1 sm:gap-1.5 w-full h-full overflow-hidden flex-nowrap">
              {refWaveBars.map((bar, i) => (
                <span
                  key={`eq-${i}`}
                  className="rounded-full bg-neutral-900 shrink-0 eq-bar-anim"
                  style={{
                    width: `${bar.w}px`,
                    height: `${bar.h}px`,
                    animationDuration: `${0.85 + (i % 6) * 0.14}s`,
                    animationDelay: `${(i % 12) * 0.08}s`,
                    animationPlayState: shouldReduceMotion ? "paused" : "running",
                  }}
                />
              ))}
            </div>
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
