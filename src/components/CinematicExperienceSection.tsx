"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

export default function CinematicExperienceSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.25 });
  const shouldReduceMotion = useReducedMotion();

  // Waveform heights for the acoustic pill (inspired by audio capsule reference)
  const waveHeights = [8, 14, 22, 12, 28, 18, 32, 24, 30, 16, 26, 14, 20, 10, 16, 8];

  return (
    <section
      id="ai-experience"
      ref={containerRef}
      className="relative w-full py-24 sm:py-32 lg:py-36 bg-[#060608] text-white overflow-hidden select-none border-t border-neutral-800/80"
      aria-label="UNOS AI Cinematic Experience"
    >
      {/* ─── Background Cybernetic Matrix & Radial Glows ─── */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none z-0"
      >
        {/* Subtle dot matrix grid */}
        <div
          className="w-full h-full opacity-[0.035]"
          style={{
            backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.7) 1px, transparent 1px)`,
            backgroundSize: "28px 28px",
          }}
        />

        {/* Ambient Neural Backlight behind robot head */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[500px] lg:w-[640px] h-[340px] sm:h-[500px] lg:h-[640px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyan-500/15 via-sky-600/5 to-transparent rounded-full blur-3xl pointer-events-none" />

        {/* Deep vignette on top and bottom edges */}
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#060608] to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#060608] to-transparent pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ─── Top Header: Section Identity ─── */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 lg:mb-20">
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-800/40 text-[11px] sm:text-xs font-mono uppercase tracking-widest text-cyan-400 mb-3.5 backdrop-blur-md shadow-[0_0_15px_rgba(6,182,212,0.15)]"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500" />
            </span>
            <span>Neural Intelligence Core</span>
          </motion.div>

          <motion.h2
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight"
          >
            Speech-to-Intent <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-300">Synchronized</span> at the Ear
          </motion.h2>

          <motion.p
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-base text-neutral-400 max-w-xl mx-auto leading-relaxed"
          >
            Inbound voice audio streams through the left acoustic sensor, activates neural intent processing, and triggers autonomous execution across your business.
          </motion.p>
        </div>

        {/* ─── Main Cinematic Interactive Stage ─── */}
        <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-4 my-4 sm:my-8">
          
          {/* ── Left Side Typography: Inbound Voice Stream ── */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:w-[32%] flex flex-col items-center lg:items-end text-center lg:text-right order-2 lg:order-1 px-2 sm:px-4"
          >
            <div className="space-y-3 max-w-sm sm:max-w-md">
              {/* Badge */}
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-neutral-900/90 border border-neutral-800 text-[11px] font-mono text-neutral-400">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                <span>INBOUND STREAM // LEFT SENSOR</span>
              </div>

              {/* Spoken Quote Card */}
              <div className="p-4 sm:p-5 rounded-2xl bg-neutral-900/60 border border-neutral-800/80 backdrop-blur-md shadow-2xl relative group hover:border-cyan-500/30 transition-all">
                <p className="text-xs font-mono uppercase tracking-wider text-cyan-400/90 mb-1">Customer Speech Input</p>
                <p className="text-sm sm:text-base font-medium text-neutral-100 leading-snug">
                  &ldquo;Can you reschedule my consultation to tomorrow at 3 PM and notify our account manager?&rdquo;
                </p>
                <div className="mt-3 flex items-center justify-center lg:justify-end gap-3 text-[11px] font-mono text-neutral-500">
                  <span>16kHz PCM</span>
                  <span>•</span>
                  <span>Dialect: Auto</span>
                  <span>•</span>
                  <span className="text-emerald-400">99.8% Match</span>
                </div>
              </div>

              {/* Data Flow Indicator Line pointing toward robot head */}
              <div className="hidden lg:flex items-center justify-end gap-2 text-cyan-400/60 text-xs font-mono">
                <span>Transmitting to Neural Core</span>
                <span className="tracking-widest">━━━━▶</span>
              </div>
            </div>
          </motion.div>

          {/* ── Centerpiece: Robot Head & Ear-to-Ear Energy Line ── */}
          <div className="relative w-full lg:w-[36%] flex flex-col items-center justify-center order-1 lg:order-2">
            
            {/* The Robot Head Container */}
            <div className="relative w-full max-w-[340px] sm:max-w-[400px] flex flex-col items-center justify-center">
              
              {/* Ear-to-Ear Energy Beam (Passing from Left Ear to Right Ear) */}
              <div
                aria-hidden="true"
                className="absolute top-[42%] left-[-15%] right-[-15%] sm:left-[-25%] sm:right-[-25%] h-12 pointer-events-none z-20 flex items-center justify-center"
              >
                {/* Horizontal guide rail */}
                <div className="relative w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent">
                  
                  {/* Left Ear Pulsing Node */}
                  <div className="absolute left-[26%] top-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-cyan-400 shadow-[0_0_12px_#22d3ee] animate-ping opacity-60" />
                  <div className="absolute left-[26%] top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-cyan-300 shadow-[0_0_8px_#22d3ee]" />

                  {/* Right Ear Pulsing Node */}
                  <div className="absolute right-[24%] top-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-cyan-400 shadow-[0_0_12px_#22d3ee] animate-ping opacity-60" />
                  <div className="absolute right-[24%] top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-cyan-300 shadow-[0_0_8px_#22d3ee]" />

                  {/* Traveling Energy Pulse (Ear-to-Ear Sweep from left to right) */}
                  {!shouldReduceMotion && (
                    <motion.div
                      className="absolute top-1/2 -translate-y-1/2 h-[3px] w-28 bg-gradient-to-r from-transparent via-cyan-300 to-transparent shadow-[0_0_15px_#22d3ee]"
                      animate={{
                        left: ["-10%", "100%"],
                        opacity: [0, 1, 1, 0],
                      }}
                      transition={{
                        duration: 2.2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  )}
                </div>
              </div>

              {/* The Robot Head Image */}
              <motion.div
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative z-10 w-full flex items-center justify-center"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <picture>
                  <source srcSet="/images/ai-agent-head.webp" type="image/webp" />
                  <img
                    src="/images/ai-agent-head.png"
                    alt="UNOS AI Agent Neural Core"
                    className="w-full h-auto max-h-[300px] sm:max-h-[350px] object-contain drop-shadow-[0_15px_35px_rgba(0,0,0,0.8)] select-none pointer-events-none"
                    loading="lazy"
                  />
                </picture>
              </motion.div>

              {/* ── Audio Waveform Capsule (Reference 2 Inspiration) ── */}
              <motion.div
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="relative z-20 -mt-6 sm:-mt-8 flex flex-col items-center"
              >
                <div className="inline-flex items-center gap-2 sm:gap-2.5 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-neutral-900/90 border border-neutral-700/80 shadow-[0_10px_30px_rgba(0,0,0,0.7)] backdrop-blur-xl">
                  {/* Glowing active indicator */}
                  <span className="flex h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee] animate-pulse" />

                  {/* Dynamic Audio Waveform Bars */}
                  <div className="flex items-center gap-1 sm:gap-1.5 h-6 sm:h-7 px-1">
                    {waveHeights.map((h, i) => (
                      <motion.span
                        key={i}
                        className="w-[2.5px] sm:w-[3px] rounded-full bg-gradient-to-t from-cyan-500 to-sky-300"
                        animate={
                          shouldReduceMotion
                            ? { height: `${h}px` }
                            : {
                                height: [
                                  `${Math.max(4, h * 0.4)}px`,
                                  `${h}px`,
                                  `${Math.max(4, h * 0.6)}px`,
                                ],
                              }
                        }
                        transition={{
                          duration: 0.8 + (i % 5) * 0.15,
                          repeat: Infinity,
                          repeatType: "reverse",
                          ease: "easeInOut",
                          delay: i * 0.05,
                        }}
                        style={{ height: `${h}px` }}
                      />
                    ))}
                  </div>

                  {/* Status Text */}
                  <span className="text-[10px] sm:text-[11px] font-mono tracking-wider text-neutral-300 uppercase pl-1">
                    ACTIVE SENSOR
                  </span>
                </div>
              </motion.div>

            </div>
          </div>

          {/* ── Right Side Typography: Outbound Autonomous Execution ── */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:w-[32%] flex flex-col items-center lg:items-start text-center lg:text-left order-3 px-2 sm:px-4"
          >
            <div className="space-y-3 max-w-sm sm:max-w-md">
              {/* Badge */}
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-neutral-900/90 border border-neutral-800 text-[11px] font-mono text-neutral-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>OUTBOUND STREAM // RIGHT SENSOR</span>
              </div>

              {/* Action Response Card */}
              <div className="p-4 sm:p-5 rounded-2xl bg-neutral-900/60 border border-neutral-800/80 backdrop-blur-md shadow-2xl relative group hover:border-emerald-500/30 transition-all">
                <p className="text-xs font-mono uppercase tracking-wider text-emerald-400/90 mb-1">Autonomous Execution</p>
                <p className="text-sm sm:text-base font-medium text-neutral-100 leading-snug">
                  &ldquo;Done! Rescheduled to tomorrow at 3:00 PM. Calendar invite sent to you and WhatsApp alert pushed to your account manager.&rdquo;
                </p>
                <div className="mt-3 flex items-center justify-center lg:justify-start gap-3 text-[11px] font-mono text-neutral-500">
                  <span className="text-cyan-400">Latency: 180ms</span>
                  <span>•</span>
                  <span>CRM Synced</span>
                  <span>•</span>
                  <span className="text-emerald-400">Zero Error</span>
                </div>
              </div>

              {/* Data Flow Indicator Line pointing outward */}
              <div className="hidden lg:flex items-center justify-start gap-2 text-emerald-400/60 text-xs font-mono">
                <span className="tracking-widest">━━━━▶</span>
                <span>Workflows Dispatched</span>
              </div>
            </div>
          </motion.div>

        </div>

        {/* ─── Bottom Telemetry Strip: Real-World Metrics ─── */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-14 sm:mt-16 pt-8 border-t border-neutral-800/80 grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
        >
          <div className="p-3">
            <div className="text-2xl sm:text-3xl font-mono font-bold text-white tracking-tight">
              &lt; 200<span className="text-cyan-400 text-lg sm:text-xl font-sans">ms</span>
            </div>
            <div className="text-xs text-neutral-400 mt-1 font-medium">Acoustic Processing Latency</div>
          </div>

          <div className="p-3">
            <div className="text-2xl sm:text-3xl font-mono font-bold text-white tracking-tight">
              99.8<span className="text-cyan-400 text-lg sm:text-xl font-sans">%</span>
            </div>
            <div className="text-xs text-neutral-400 mt-1 font-medium">Intent Precision Rate</div>
          </div>

          <div className="p-3">
            <div className="text-2xl sm:text-3xl font-mono font-bold text-white tracking-tight">
              24<span className="text-cyan-400 text-lg sm:text-xl font-sans">/7/365</span>
            </div>
            <div className="text-xs text-neutral-400 mt-1 font-medium">Autonomous Uptime</div>
          </div>

          <div className="p-3">
            <div className="text-2xl sm:text-3xl font-mono font-bold text-emerald-400 tracking-tight">
              Zero
            </div>
            <div className="text-xs text-neutral-400 mt-1 font-medium">Human Latency Overhead</div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
