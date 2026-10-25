"use client";

import { useRef, useState } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import { siteConfig } from "@/lib/config";

const ease = [0.16, 1, 0.3, 1] as const;

interface ServiceItem {
  id: string;
  number: string;
  tag: string;
  title: string;
  headline: string;
  description: string;
  highlight: string;
  features: string[];
  inquiryText: string;
  icon: (className?: string) => React.ReactNode;
}

const services: ServiceItem[] = [
  {
    id: "voice-agents",
    number: "01",
    tag: "Core Telephony",
    title: "AI Voice Agents",
    headline: "Human-grade telephone reception that never sleeps or misses a patient call.",
    description:
      "Intelligent conversational phone agents that answer incoming calls 24/7, triage clinical emergencies, answer complex FAQs, and book appointments directly into your calendar software.",
    highlight: "24/7 Zero Missed Calls",
    features: [
      "Sub-second voice latency (< 450ms) for natural human conversation",
      "Direct two-way calendar & clinic software integration",
      "Instant SMS confirmation & CRM intake trigger",
    ],
    inquiryText: "Hi UNOS AUTOMATIONS, I want to inquire about AI Voice Agents.",
    icon: (className = "w-6 h-6") => (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
  },
  {
    id: "website-dev",
    number: "02",
    tag: "Design & Conversion",
    title: "Business Website Development",
    headline: "Clean, Apple-inspired web architecture built to convert visitors into clients.",
    description:
      "Fast, responsive websites engineered with rigorous typography, micro-interactions, and conversion psychology. Designed to project undeniable authority and turn traffic into booked revenue.",
    highlight: "Apple-Grade Aesthetics",
    features: [
      "Lightning-fast Next.js architecture with 95+ Core Web Vitals",
      "Interactive WhatsApp booking flows & inquiry triage",
      "Responsive across every phone, tablet, and widescreen display",
    ],
    inquiryText: "Hi UNOS AUTOMATIONS, I want to inquire about Business Website Development.",
    icon: (className = "w-6 h-6") => (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0H3" />
      </svg>
    ),
  },
  {
    id: "workflow",
    number: "03",
    tag: "Process Engineering",
    title: "Workflow Automation",
    headline: "End-to-end multi-app automations that handle repetitive back-office operations.",
    description:
      "Custom integration pipelines connecting your CRM, billing, email, and databases. We eliminate manual data re-entry and administrative bottlenecks so your team focuses on high-value work.",
    highlight: "n8n, Make & Custom APIs",
    features: [
      "Self-healing workflows with automatic retry logic",
      "Bi-directional data sync between legacy and modern software",
      "Real-time operational alerts sent to WhatsApp or Slack",
    ],
    inquiryText: "Hi UNOS AUTOMATIONS, I want to inquire about Workflow Automation.",
    icon: (className = "w-6 h-6") => (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    id: "booking",
    number: "04",
    tag: "Scheduling Cadence",
    title: "Appointment Booking Automation",
    headline: "Automated booking funnels that virtually eliminate clinic and business no-shows.",
    description:
      "Smart self-scheduling workflows with automated multi-channel WhatsApp and SMS reminder cadences. Patients can confirm, reschedule, or cancel friction-free without staff intervention.",
    highlight: "Zero No-Shows",
    features: [
      "Instant calendar availability checking across providers",
      "Automated WhatsApp & SMS reminder cadence (24h & 2h before)",
      "Self-serve rescheduling links that protect calendar slots",
    ],
    inquiryText: "Hi UNOS AUTOMATIONS, I want to inquire about Appointment Booking Automation.",
    icon: (className = "w-6 h-6") => (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
      </svg>
    ),
  },
  {
    id: "crm",
    number: "05",
    tag: "Lead Velocity",
    title: "WhatsApp, CRM & Lead Automation",
    headline: "Engage every prospect in under 60 seconds and auto-qualify high-value opportunities.",
    description:
      "Connect your lead channels directly to WhatsApp Business API and your CRM. Instantly qualify inbound requests, enrich customer profiles, and notify your sales team the second a lead arrives.",
    highlight: "Instant Intake Alerts",
    features: [
      "Official WhatsApp Business API integration & template messaging",
      "Automated lead scoring, intake tags, and triage rules",
      "Real-time pipeline synchronization to your CRM database",
    ],
    inquiryText: "Hi UNOS AUTOMATIONS, I want to inquire about WhatsApp & CRM Lead Automation.",
    icon: (className = "w-6 h-6") => (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a.75.75 0 01-.818-.887l.487-2.733C3.518 15.938 3 14.045 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
      </svg>
    ),
  },
];

export default function ServicesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const containerVariants: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 35 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease },
    },
  };

  return (
    <section
      id="services"
      ref={ref}
      className="py-28 lg:py-36 relative overflow-hidden bg-gradient-to-b from-[#FFFDF9] via-[#FFF8F0] to-[#FFFFFF]"
    >
      {/* Dynamic Lighting Effects & Soft Orange Gradient Ambiance */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[650px] pointer-events-none rounded-full opacity-60 blur-3xl"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(254, 215, 170, 0.45), rgba(255, 237, 213, 0.25) 50%, transparent 80%)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute top-1/3 -right-24 w-[600px] h-[600px] pointer-events-none rounded-full opacity-40 blur-3xl"
        style={{
          background: "radial-gradient(circle, rgba(251, 146, 60, 0.2) 0%, rgba(254, 243, 199, 0.1) 60%, transparent 80%)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute bottom-10 -left-24 w-[600px] h-[600px] pointer-events-none rounded-full opacity-35 blur-3xl"
        style={{
          background: "radial-gradient(circle, rgba(254, 215, 170, 0.25) 0%, transparent 70%)",
        }}
      />

      {/* Tactile Micro-Grid Texture */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage: "radial-gradient(#ea580c 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-18 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease }}
            className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/90 border border-orange-200/80 shadow-[0_2px_8px_rgba(249,115,22,0.08)] mb-5"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500" />
            </span>
            <span className="text-[11px] font-bold text-orange-700 tracking-wider uppercase font-mono">
              Systems & Capabilities
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.08, ease }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 tracking-tight leading-[1.12]"
          >
            Automation Built Around{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500">
              Your Business.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.16, ease }}
            className="mt-5 text-lg sm:text-xl text-neutral-600 leading-relaxed font-light max-w-2xl"
          >
            Practical AI voice receptionists, intelligent workflow integrations, and high-conversion web platforms engineered to capture more revenue and free your team from repetitive tasks.
          </motion.p>

          {/* Quick value props pill bar */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.22, ease }}
            className="mt-6 flex flex-wrap items-center gap-3 text-xs text-neutral-600"
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-orange-100/60 text-orange-800 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
              24/7 Zero Missed Calls
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-orange-100/60 text-orange-800 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
              &lt; 60s Lead Response
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-orange-100/60 text-orange-800 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
              Custom API & Clinic Integration
            </span>
          </motion.div>
        </div>

        {/* Elevated Services Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7"
        >
          {/* Card 1: Flagship AI Voice Agents (Featured Bento - spans 2 cols on lg) */}
          <motion.article
            variants={cardVariants}
            whileHover={{ y: -6, transition: { duration: 0.28, ease } }}
            onMouseEnter={() => setHoveredCard("voice-agents")}
            onMouseLeave={() => setHoveredCard(null)}
            className="group relative md:col-span-2 lg:col-span-2 rounded-[32px] p-8 sm:p-10 bg-white/95 backdrop-blur-xl border border-orange-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:border-orange-300 hover:shadow-[0_24px_60px_-15px_rgba(249,115,22,0.18)] transition-all duration-300 flex flex-col justify-between overflow-hidden"
          >
            {/* Top accent light bar */}
            <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-orange-500 via-amber-400 to-orange-500" />

            {/* Corner ambient glow */}
            <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-gradient-to-br from-orange-400/20 via-amber-300/15 to-transparent blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <div>
              {/* Header metadata row */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center text-white shadow-md shadow-orange-500/25 group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-orange-500/35 transition-all duration-300">
                    {services[0].icon("w-6 h-6 text-white")}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold text-orange-600 uppercase tracking-widest">
                        {services[0].number} / {services[0].tag}
                      </span>
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-orange-100 text-orange-700 border border-orange-200">
                        Flagship
                      </span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-neutral-900 tracking-tight mt-0.5">
                      {services[0].title}
                    </h3>
                  </div>
                </div>

                <div className="hidden sm:inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-medium">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Live Operational Ready
                </div>
              </div>

              {/* Two-column responsive content area */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 my-4 items-center">
                <div className="lg:col-span-7 space-y-4">
                  <p className="text-base text-neutral-700 font-medium leading-snug">
                    {services[0].headline}
                  </p>
                  <p className="text-sm text-neutral-600 leading-relaxed font-light">
                    {services[0].description}
                  </p>

                  <div className="space-y-2.5 pt-2">
                    {services[0].features.map((feat) => (
                      <div key={feat} className="flex items-start gap-2.5 text-xs text-neutral-700">
                        <span className="w-4 h-4 rounded-full bg-orange-100 border border-orange-200 text-orange-600 flex items-center justify-center shrink-0 mt-0.5">
                          <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                          </svg>
                        </span>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Interactive Telephony Preview Widget */}
                <div className="lg:col-span-5 bg-gradient-to-br from-neutral-900 to-[#12151e] rounded-2xl p-5 text-white shadow-xl border border-neutral-800 relative">
                  <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-3">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-[11px] font-mono tracking-tight text-neutral-300">VOICE AI RECEPTION</span>
                    </div>
                    <span className="text-[10px] font-mono text-orange-400 px-2 py-0.5 rounded bg-orange-500/10 border border-orange-500/20">
                      &lt; 420ms
                    </span>
                  </div>

                  {/* Equalizer animation */}
                  <div className="py-2.5 flex items-center justify-center gap-1.5 h-12">
                    {[40, 75, 55, 95, 60, 85, 45, 90, 65, 35].map((val, idx) => (
                      <span
                        key={idx}
                        className="w-1 rounded-full bg-gradient-to-t from-orange-500 to-amber-300"
                        style={{
                          height: `${hoveredCard === "voice-agents" ? Math.min(100, val + 15) : val}%`,
                          animation: `pulse 1.${idx + 1}s ease-in-out infinite alternate`,
                          transition: "height 0.3s ease",
                        }}
                      />
                    ))}
                  </div>

                  {/* Live transcript simulation */}
                  <div className="mt-2 space-y-1.5 text-[11px] font-mono leading-relaxed bg-black/40 rounded-xl p-3 border border-white/5">
                    <p className="text-neutral-400">
                      <span className="text-orange-400 font-bold">Caller:</span> &ldquo;Do you have an opening for Dr. Miller tomorrow?&rdquo;
                    </p>
                    <p className="text-emerald-300">
                      <span className="text-emerald-400 font-bold">UNOS AI:</span> &ldquo;Yes! 10:30 AM is open. I&apos;ve reserved it and texted you the pass.&rdquo;
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Card Action */}
            <div className="pt-6 mt-4 border-t border-neutral-200/80 flex flex-wrap items-center justify-between gap-4">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-orange-600 bg-orange-50 px-3 py-1 rounded-full border border-orange-200">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                {services[0].highlight}
              </span>

              <a
                href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(services[0].inquiryText)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold text-neutral-800 hover:text-orange-600 transition-colors group/link"
              >
                <span>Deploy AI Voice Reception</span>
                <span className="w-6 h-6 rounded-full bg-orange-50 text-orange-600 flex items-center justify-center group-hover/link:bg-orange-500 group-hover/link:text-white transition-all">
                  →
                </span>
              </a>
            </div>
          </motion.article>

          {/* Card 2: Business Website Development */}
          <motion.article
            variants={cardVariants}
            whileHover={{ y: -6, transition: { duration: 0.28, ease } }}
            onMouseEnter={() => setHoveredCard("website-dev")}
            onMouseLeave={() => setHoveredCard(null)}
            className="group relative rounded-[32px] p-8 sm:p-9 bg-white/95 backdrop-blur-xl border border-neutral-200/90 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:border-orange-200 hover:shadow-[0_24px_60px_-15px_rgba(249,115,22,0.14)] transition-all duration-300 flex flex-col justify-between overflow-hidden"
          >
            {/* Top luminous hover highlight */}
            <div className="absolute inset-x-8 top-0 h-[2px] bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
            <div className="absolute -top-12 -right-12 w-36 h-36 rounded-full bg-gradient-to-br from-orange-400/15 via-amber-300/10 to-transparent blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-orange-50 border border-orange-200/80 flex items-center justify-center text-orange-600 shadow-xs group-hover:bg-gradient-to-br group-hover:from-orange-500 group-hover:to-amber-500 group-hover:text-white group-hover:border-transparent transition-all duration-300">
                  {services[1].icon()}
                </div>
                <span className="text-[11px] font-mono font-bold text-neutral-400 group-hover:text-orange-600 transition-colors">
                  {services[1].number} / {services[1].tag}
                </span>
              </div>

              <h3 className="text-xl font-bold text-neutral-900 tracking-tight mb-2">
                {services[1].title}
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed font-light mb-5">
                {services[1].description}
              </p>

              <div className="space-y-2 mb-6">
                {services[1].features.map((feat) => (
                  <div key={feat} className="flex items-start gap-2 text-xs text-neutral-700">
                    <span className="w-4 h-4 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </span>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-5 border-t border-neutral-100 flex items-center justify-between">
              <span className="text-xs font-semibold text-orange-600">{services[1].highlight}</span>
              <a
                href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(services[1].inquiryText)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 rounded-full bg-neutral-100 text-neutral-600 flex items-center justify-center group-hover:bg-orange-500 group-hover:text-white transition-all text-xs font-bold"
                aria-label={`Chat about ${services[1].title}`}
              >
                →
              </a>
            </div>
          </motion.article>

          {/* Card 3: Workflow Automation */}
          <motion.article
            variants={cardVariants}
            whileHover={{ y: -6, transition: { duration: 0.28, ease } }}
            onMouseEnter={() => setHoveredCard("workflow")}
            onMouseLeave={() => setHoveredCard(null)}
            className="group relative rounded-[32px] p-8 sm:p-9 bg-white/95 backdrop-blur-xl border border-neutral-200/90 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:border-orange-200 hover:shadow-[0_24px_60px_-15px_rgba(249,115,22,0.14)] transition-all duration-300 flex flex-col justify-between overflow-hidden"
          >
            <div className="absolute inset-x-8 top-0 h-[2px] bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
            <div className="absolute -top-12 -right-12 w-36 h-36 rounded-full bg-gradient-to-br from-orange-400/15 via-amber-300/10 to-transparent blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-orange-50 border border-orange-200/80 flex items-center justify-center text-orange-600 shadow-xs group-hover:bg-gradient-to-br group-hover:from-orange-500 group-hover:to-amber-500 group-hover:text-white group-hover:border-transparent transition-all duration-300">
                  {services[2].icon()}
                </div>
                <span className="text-[11px] font-mono font-bold text-neutral-400 group-hover:text-orange-600 transition-colors">
                  {services[2].number} / {services[2].tag}
                </span>
              </div>

              <h3 className="text-xl font-bold text-neutral-900 tracking-tight mb-2">
                {services[2].title}
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed font-light mb-5">
                {services[2].description}
              </p>

              <div className="space-y-2 mb-6">
                {services[2].features.map((feat) => (
                  <div key={feat} className="flex items-start gap-2 text-xs text-neutral-700">
                    <span className="w-4 h-4 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </span>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-5 border-t border-neutral-100 flex items-center justify-between">
              <span className="text-xs font-semibold text-orange-600">{services[2].highlight}</span>
              <a
                href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(services[2].inquiryText)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 rounded-full bg-neutral-100 text-neutral-600 flex items-center justify-center group-hover:bg-orange-500 group-hover:text-white transition-all text-xs font-bold"
                aria-label={`Chat about ${services[2].title}`}
              >
                →
              </a>
            </div>
          </motion.article>

          {/* Card 4: Appointment Booking Automation */}
          <motion.article
            variants={cardVariants}
            whileHover={{ y: -6, transition: { duration: 0.28, ease } }}
            onMouseEnter={() => setHoveredCard("booking")}
            onMouseLeave={() => setHoveredCard(null)}
            className="group relative rounded-[32px] p-8 sm:p-9 bg-white/95 backdrop-blur-xl border border-neutral-200/90 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:border-orange-200 hover:shadow-[0_24px_60px_-15px_rgba(249,115,22,0.14)] transition-all duration-300 flex flex-col justify-between overflow-hidden"
          >
            <div className="absolute inset-x-8 top-0 h-[2px] bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
            <div className="absolute -top-12 -right-12 w-36 h-36 rounded-full bg-gradient-to-br from-orange-400/15 via-amber-300/10 to-transparent blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-orange-50 border border-orange-200/80 flex items-center justify-center text-orange-600 shadow-xs group-hover:bg-gradient-to-br group-hover:from-orange-500 group-hover:to-amber-500 group-hover:text-white group-hover:border-transparent transition-all duration-300">
                  {services[3].icon()}
                </div>
                <span className="text-[11px] font-mono font-bold text-neutral-400 group-hover:text-orange-600 transition-colors">
                  {services[3].number} / {services[3].tag}
                </span>
              </div>

              <h3 className="text-xl font-bold text-neutral-900 tracking-tight mb-2">
                {services[3].title}
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed font-light mb-5">
                {services[3].description}
              </p>

              <div className="space-y-2 mb-6">
                {services[3].features.map((feat) => (
                  <div key={feat} className="flex items-start gap-2 text-xs text-neutral-700">
                    <span className="w-4 h-4 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </span>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-5 border-t border-neutral-100 flex items-center justify-between">
              <span className="text-xs font-semibold text-orange-600">{services[3].highlight}</span>
              <a
                href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(services[3].inquiryText)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 rounded-full bg-neutral-100 text-neutral-600 flex items-center justify-center group-hover:bg-orange-500 group-hover:text-white transition-all text-xs font-bold"
                aria-label={`Chat about ${services[3].title}`}
              >
                →
              </a>
            </div>
          </motion.article>

          {/* Card 5: WhatsApp, CRM & Lead Automation */}
          <motion.article
            variants={cardVariants}
            whileHover={{ y: -6, transition: { duration: 0.28, ease } }}
            onMouseEnter={() => setHoveredCard("crm")}
            onMouseLeave={() => setHoveredCard(null)}
            className="group relative rounded-[32px] p-8 sm:p-9 bg-white/95 backdrop-blur-xl border border-neutral-200/90 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:border-orange-200 hover:shadow-[0_24px_60px_-15px_rgba(249,115,22,0.14)] transition-all duration-300 flex flex-col justify-between overflow-hidden"
          >
            <div className="absolute inset-x-8 top-0 h-[2px] bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
            <div className="absolute -top-12 -right-12 w-36 h-36 rounded-full bg-gradient-to-br from-orange-400/15 via-amber-300/10 to-transparent blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-orange-50 border border-orange-200/80 flex items-center justify-center text-orange-600 shadow-xs group-hover:bg-gradient-to-br group-hover:from-orange-500 group-hover:to-amber-500 group-hover:text-white group-hover:border-transparent transition-all duration-300">
                  {services[4].icon()}
                </div>
                <span className="text-[11px] font-mono font-bold text-neutral-400 group-hover:text-orange-600 transition-colors">
                  {services[4].number} / {services[4].tag}
                </span>
              </div>

              <h3 className="text-xl font-bold text-neutral-900 tracking-tight mb-2">
                {services[4].title}
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed font-light mb-5">
                {services[4].description}
              </p>

              <div className="space-y-2 mb-6">
                {services[4].features.map((feat) => (
                  <div key={feat} className="flex items-start gap-2 text-xs text-neutral-700">
                    <span className="w-4 h-4 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </span>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-5 border-t border-neutral-100 flex items-center justify-between">
              <span className="text-xs font-semibold text-orange-600">{services[4].highlight}</span>
              <a
                href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(services[4].inquiryText)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 rounded-full bg-neutral-100 text-neutral-600 flex items-center justify-center group-hover:bg-orange-500 group-hover:text-white transition-all text-xs font-bold"
                aria-label={`Chat about ${services[4].title}`}
              >
                →
              </a>
            </div>
          </motion.article>
        </motion.div>

        {/* Bottom Conversion Callout */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.35, ease }}
          className="mt-14 lg:mt-16 rounded-3xl p-6 sm:p-8 bg-gradient-to-r from-orange-500 via-orange-600 to-amber-600 text-white shadow-xl shadow-orange-500/15 flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
              Looking for a custom automation architecture?
            </h3>
            <p className="text-sm text-orange-100 font-light">
              We design, build, and maintain tailored AI workflows and voice reception systems for your specific tech stack.
            </p>
          </div>

          <a
            href={siteConfig.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2.5 px-6 py-3.5 bg-white text-neutral-900 text-sm font-semibold rounded-full hover:bg-neutral-100 hover:shadow-lg transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <svg className="w-4 h-4 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            <span>Chat on WhatsApp</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
