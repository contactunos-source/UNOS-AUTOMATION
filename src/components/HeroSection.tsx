"use client";

import { useRef, useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useInView,
  type Variants,
} from "framer-motion";
import { siteConfig } from "@/lib/config";

const ease = [0.16, 1, 0.3, 1] as const;

// WhatsApp Icon
function WhatsAppIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const inView = useInView(textRef, { once: true });
  const [activeIndustry, setActiveIndustry] = useState<"dental" | "services">("dental");

  // Track scroll through the hero container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Spring physics for smooth organic scroll motion
  const smooth = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    restDelta: 0.0005,
  });

  // ─── Scroll Transforms for Human Hand (Left) ───
  // Initial: mostly off-screen left (-65%)
  // End of hero scroll: approaches center point (0%)
  const humanX = useTransform(smooth, [0, 0.85], ["-58%", "0%"]);
  const humanRotate = useTransform(smooth, [0, 0.85], [-5, 0]);
  const humanOpacity = useTransform(smooth, [0, 0.15], [0.85, 1]);

  // ─── Scroll Transforms for Robotic Hand (Right) ───
  // Initial: mostly off-screen right (+65%)
  // End of hero scroll: approaches center point (0%)
  const robotX = useTransform(smooth, [0, 0.85], ["58%", "0%"]);
  const robotRotate = useTransform(smooth, [0, 0.85], [5, 0]);
  const robotOpacity = useTransform(smooth, [0, 0.15], [0.85, 1]);

  // ─── Central Energy Spark / Convergence Pulse ───
  // Lights up as fingertips come within touching distance (0.65 -> 0.85)
  const sparkOpacity = useTransform(smooth, [0.65, 0.84, 0.98], [0, 1, 0.85]);
  const sparkScale = useTransform(smooth, [0.65, 0.85], [0.2, 1.25]);

  // ─── Atmospheric Ambient Orb ───
  const orbScale = useTransform(smooth, [0, 0.85], [0.9, 1.2]);
  const orbOpacity = useTransform(smooth, [0, 0.85], [0.55, 0.95]);

  // ─── Connection Status Badge ───
  const badgeOpacity = useTransform(smooth, [0.65, 0.85], [0, 1]);
  const badgeY = useTransform(smooth, [0.65, 0.85], [16, 0]);

  // Scroll indicator fade-out
  const scrollIndicatorOpacity = useTransform(smooth, [0, 0.25], [1, 0]);

  const containerVariants: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12 } },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 22 },
    show: { opacity: 1, y: 0, transition: { duration: 0.75, ease } },
  };

  return (
    <div
      id="home"
      ref={containerRef}
      className="relative w-full h-[175vh] md:h-[190vh] bg-[#FCFCFA]"
    >
      {/* Sticky Hero Viewport */}
      <section className="sticky top-0 h-screen w-full flex flex-col items-center justify-between overflow-hidden select-none">
        {/* ─── Layer 0: Delicate Background Grid Texture ─── */}
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.035] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(#0a0a0a 1px, transparent 1px), linear-gradient(90deg, #0a0a0a 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />

        {/* ─── Layer 1: Ethereal Iridescent Atmospheric Orb (MachinaFusion Reference) ─── */}
        <motion.div
          aria-hidden="true"
          style={{ scale: orbScale, opacity: orbOpacity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[850px] lg:w-[1050px] h-[550px] sm:h-[650px] lg:h-[750px] rounded-full pointer-events-none blur-3xl"
        >
          <div
            className="w-full h-full rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(254, 215, 170, 0.5) 0%, rgba(251, 146, 60, 0.2) 32%, rgba(224, 231, 255, 0.25) 55%, transparent 75%)",
            }}
          />
        </motion.div>

        {/* ─── Layer 2: Subtle Watermarked Background Typography ─── */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-1/2 -translate-y-1/2 pointer-events-none overflow-hidden text-center opacity-[0.035] select-none"
        >
          <span className="text-[12vw] sm:text-[10vw] font-black tracking-tighter text-neutral-900 uppercase whitespace-nowrap block font-sans">
            HUMAN AGENCY · AI PRECISION
          </span>
        </div>

        {/* Top spacer to account for sticky navbar */}
        <div className="h-16 lg:h-20 w-full shrink-0" />

        {/* ─── Layer 3: Central Hero Content ─── */}
        <div
          ref={textRef}
          className="relative z-30 max-w-5xl mx-auto px-6 text-center flex flex-col items-center my-auto"
        >
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="flex flex-col items-center"
          >
            {/* Segmented Industry Switcher */}
            <motion.div variants={itemVariants} className="mb-5">
              <div className="inline-flex items-center gap-1.5 p-1 bg-white/90 rounded-full border border-neutral-200/90 shadow-[0_2px_8px_rgba(0,0,0,0.04)] backdrop-blur-md">
                <button
                  onClick={() => setActiveIndustry("dental")}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-300 ${
                    activeIndustry === "dental"
                      ? "bg-neutral-900 text-white shadow-sm"
                      : "text-neutral-500 hover:text-neutral-900"
                  }`}
                >
                  Dental Clinics
                </button>
                <button
                  onClick={() => setActiveIndustry("services")}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-300 ${
                    activeIndustry === "services"
                      ? "bg-neutral-900 text-white shadow-sm"
                      : "text-neutral-500 hover:text-neutral-900"
                  }`}
                >
                  Service Businesses
                </button>
              </div>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-neutral-900 leading-[1.08] max-w-4xl"
            >
              Make Your Business{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 relative inline-block">
                Work Smarter.
                <span className="absolute left-0 right-0 -bottom-1 h-[3px] bg-gradient-to-r from-orange-400 via-orange-500 to-transparent rounded-full opacity-70" />
              </span>
            </motion.h1>

            {/* Supporting Copy */}
            <motion.p
              variants={itemVariants}
              className="mt-5 text-base sm:text-lg lg:text-xl text-neutral-600 max-w-2xl leading-relaxed font-light"
            >
              {activeIndustry === "dental"
                ? "AI voice agents, appointment booking automations, and modern websites that help dental practices capture patients and eliminate phone tag."
                : "AI voice agents, intelligent automations, and modern websites that help service businesses capture leads and scale operations seamlessly."}
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={itemVariants}
              className="mt-8 flex flex-col sm:flex-row gap-3.5 items-center z-40 pointer-events-auto"
            >
              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 px-8 py-3.5 bg-neutral-900 text-white text-sm font-semibold rounded-full hover:bg-neutral-800 transition-all shadow-xl shadow-neutral-900/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-neutral-900 hover:scale-[1.02] active:scale-[0.98]"
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
                className="inline-flex items-center gap-2 px-8 py-3.5 border border-neutral-300 bg-white/90 text-neutral-800 text-sm font-semibold rounded-full hover:bg-white hover:border-neutral-400 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-neutral-400 shadow-xs hover:scale-[1.01] active:scale-[0.98] backdrop-blur-sm"
              >
                Explore How It Works
              </a>
            </motion.div>

            {/* Convergence Status Badge (appears when hands meet) */}
            <motion.div
              style={{ opacity: badgeOpacity, y: badgeY }}
              className="mt-7 inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/95 border border-orange-200 shadow-md backdrop-blur-md pointer-events-none"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500" />
              </span>
              <span className="text-[11px] font-mono font-bold text-orange-700 tracking-wider uppercase">
                Human Intent Connected to AI Automation
              </span>
            </motion.div>
          </motion.div>
        </div>

        {/* ─── Layer 4: The Creation-of-Adam Hands Convergence Animation ─── */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none flex items-center justify-between z-20 overflow-hidden"
        >
          {/* Human Hand (Left Edge Reaching Right) */}
          <motion.div
            style={{
              x: humanX,
              rotate: humanRotate,
              opacity: humanOpacity,
            }}
            className="absolute left-0 top-1/2 -translate-y-[45%] w-[480px] sm:w-[620px] lg:w-[740px] xl:w-[840px] pointer-events-none will-change-transform"
          >
            {/* Subtle natural breathing float */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-full"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/hero-hand-human.png"
                alt="Human intelligence reaching"
                className="w-full h-auto object-contain filter drop-shadow-[0_20px_35px_rgba(0,0,0,0.12)]"
                loading="eager"
              />
            </motion.div>
          </motion.div>

          {/* Central Energy Spark / Touch Flare */}
          <motion.div
            style={{
              opacity: sparkOpacity,
              scale: sparkScale,
            }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-30"
          >
            <div className="relative flex items-center justify-center">
              {/* Radial glow aura */}
              <div className="w-24 h-24 rounded-full bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500 blur-xl opacity-80 animate-pulse" />
              {/* Core luminous point */}
              <div className="absolute w-4 h-4 rounded-full bg-white shadow-[0_0_20px_6px_#f97316]" />
              {/* Subtle cross light rays */}
              <div className="absolute w-16 h-[2px] bg-gradient-to-r from-transparent via-white to-transparent" />
              <div className="absolute h-16 w-[2px] bg-gradient-to-b from-transparent via-white to-transparent" />
            </div>
          </motion.div>

          {/* Robotic Hand (Right Edge Reaching Left) */}
          <motion.div
            style={{
              x: robotX,
              rotate: robotRotate,
              opacity: robotOpacity,
            }}
            className="absolute right-0 top-1/2 -translate-y-[52%] w-[480px] sm:w-[620px] lg:w-[740px] xl:w-[840px] pointer-events-none will-change-transform"
          >
            {/* Subtle natural breathing float */}
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="relative w-full"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/hero-hand-robot.png"
                alt="AI technology reaching"
                className="w-full h-auto object-contain filter drop-shadow-[0_20px_35px_rgba(0,0,0,0.12)]"
                loading="eager"
              />
            </motion.div>
          </motion.div>
        </div>

        {/* ─── Layer 5: Bottom Scroll Prompt ─── */}
        <motion.div
          style={{ opacity: scrollIndicatorOpacity }}
          className="relative z-30 pb-7 flex flex-col items-center gap-2 pointer-events-none select-none text-neutral-400"
        >
          <span className="text-[10px] font-mono font-semibold uppercase tracking-widest text-neutral-400">
            Scroll to connect
          </span>
          <div className="w-5 h-8 rounded-full border border-neutral-300 flex items-start justify-center p-1">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
              className="w-1.5 h-1.5 rounded-full bg-orange-500"
            />
          </div>
        </motion.div>
      </section>
    </div>
  );
}
