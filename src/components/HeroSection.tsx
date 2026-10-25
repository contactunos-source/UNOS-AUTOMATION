"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView, type Variants, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/lib/config";

// Reference-inspired smooth apple cubic bezier easing
const ease = [0.16, 1, 0.3, 1] as const;

// WhatsApp Icon
function WhatsAppIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

// Fluid Waveform bars
function WaveformBars({ active = true, color = "#f97316" }: { active?: boolean; color?: string }) {
  return (
    <div className="flex items-center gap-[3.5px] h-9" aria-hidden="true">
      {[0.35, 0.65, 1, 0.75, 0.5, 0.9, 0.65, 1, 0.85, 0.55, 0.7, 0.4].map((h, i) => (
        <span
          key={i}
          className="rounded-full inline-block"
          style={{
            width: 3.5,
            height: active ? `${Math.round(h * 32)}px` : "6px",
            background: color,
            animation: active
              ? `wave-bar 0.85s ease-in-out ${i * 0.065}s infinite alternate`
              : "none",
            transition: "height 0.3s ease",
          }}
        />
      ))}
      <style>{`
        @keyframes wave-bar {
          from { transform: scaleY(0.3); opacity: 0.6; }
          to { transform: scaleY(1); opacity: 1; }
        }
      `}</style>
    </div>
  );
}

// Animated call timer
function CallTimer({ active }: { active: boolean }) {
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    if (!active) { setSeconds(0); return; }
    const id = setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => clearInterval(id);
  }, [active]);

  const mm = String(Math.floor(seconds / 60)).padStart(2, "0");
  const ss = String(seconds % 60).padStart(2, "0");
  return <span className="text-white/80 text-xs font-mono tabular-nums tracking-wider">{mm}:{ss}</span>;
}

// Smartphone Interface Mockup
function PhoneMockup({ industry }: { industry: "dental" | "services" }) {
  const [callState, setCallState] = useState<"ringing" | "active">("ringing");

  useEffect(() => {
    const t = setTimeout(() => setCallState("active"), 2000);
    return () => clearTimeout(t);
  }, [industry]);

  const callerName = industry === "dental" ? "Apex Dental Care" : "Premier Service Clinic";
  const callerSub = industry === "dental" ? "Patient Enquiry Line" : "Client Booking Line";

  return (
    <div className="relative mx-auto" style={{ width: 236 }}>
      {/* Phone chassis */}
      <div
        className="relative rounded-[44px] overflow-hidden shadow-2xl border-[7px] border-neutral-900 hardware-accelerated"
        style={{ background: "#0e0e12" }}
      >
        {/* Dynamic Island */}
        <div className="flex justify-center pt-3 pb-1">
          <div className="w-24 h-6 rounded-full bg-black flex items-center justify-center gap-2 border border-white/10">
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-white text-[10px] font-medium tracking-tight">UNOS Voice AI</span>
          </div>
        </div>

        {/* Screen */}
        <div
          className="flex flex-col items-center px-5 pt-3 pb-6 text-center"
          style={{ minHeight: 375, background: "linear-gradient(180deg, #131722 0%, #090c13 100%)" }}
        >
          {/* Avatar & Caller Info */}
          <div className="flex flex-col items-center gap-2 mt-3 mb-4">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center text-white text-lg font-bold shadow-lg shadow-orange-500/30">
              {industry === "dental" ? "DC" : "SC"}
            </div>
            <div className="text-white text-base font-semibold tracking-tight">{callerName}</div>
            <div className="text-emerald-400 text-xs flex items-center gap-1.5 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              {callState === "ringing" ? "Incoming Call…" : "AI Receptionist Answering"}
            </div>
            <span className="text-white/40 text-[10px]">{callerSub}</span>
          </div>

          {/* Soundwave + Timer */}
          <div className="flex flex-col items-center gap-1.5 my-2 py-1">
            <WaveformBars active={callState === "active"} color="#f97316" />
            <CallTimer active={callState === "active"} />
          </div>

          {/* Status pill */}
          <div className="mt-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15">
            <span className="text-white/90 text-[11px] font-medium">
              {callState === "ringing" ? "Connecting Voice AI…" : "Capturing Appointment Info"}
            </span>
          </div>

          {/* Call Controls */}
          <div className="flex gap-6 mt-auto pt-4">
            {callState === "ringing" ? (
              <>
                <div className="w-11 h-11 rounded-full bg-red-500/20 flex items-center justify-center">
                  <svg className="w-5 h-5 text-red-400" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <div className="w-11 h-11 rounded-full bg-emerald-500 flex items-center justify-center animate-pulse shadow-lg shadow-emerald-500/40">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
              </>
            ) : (
              <div className="w-11 h-11 rounded-full bg-red-500 flex items-center justify-center shadow-lg shadow-red-500/30">
                <svg className="w-5 h-5 text-white rotate-[135deg]" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Ambient orange glow */}
      <div
        className="absolute inset-0 -z-10 blur-3xl opacity-25 rounded-[44px]"
        style={{ background: "radial-gradient(circle, #f97316 0%, transparent 70%)" }}
        aria-hidden="true"
      />
    </div>
  );
}

// Connecting workflow step node
function WorkflowNode({ label, sub, icon }: { label: string; sub: string; icon: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center gap-2 p-3.5 rounded-2xl bg-white border border-neutral-200/90 shadow-sm min-w-[130px] flex-1 hover:border-orange-200 hover:shadow-md transition-all duration-300">
      <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center text-orange-600">
        {icon}
      </div>
      <div className="text-center">
        <div className="text-xs font-semibold text-neutral-900 leading-tight">{label}</div>
        <div className="text-[11px] text-neutral-500 leading-tight mt-0.5">{sub}</div>
      </div>
    </div>
  );
}

export default function HeroSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [activeIndustry, setActiveIndustry] = useState<"dental" | "services">("dental");

  const containerVariants: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12 } },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.75, ease } },
  };

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen flex flex-col items-center justify-center pt-28 pb-20 overflow-hidden"
    >
      {/* Reference video inspired: Delicate Circuit Grid Background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#0a0a0a 1px, transparent 1px), linear-gradient(90deg, #0a0a0a 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      {/* Soft Ambient Radial Halo */}
      <div
        aria-hidden="true"
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[580px] rounded-full opacity-[0.08] pointer-events-none"
        style={{ background: "radial-gradient(circle, #f97316 0%, transparent 70%)" }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="flex flex-col items-center text-center"
        >
          {/* Reference Video Feature: Fluid Segmented Switcher (like Suppliers <-> Retailers in frame 002) */}
          <motion.div variants={itemVariants} className="mb-6">
            <div className="inline-flex items-center gap-1.5 p-1 bg-neutral-100/90 rounded-full border border-neutral-200/80 shadow-xs backdrop-blur-sm">
              <button
                onClick={() => setActiveIndustry("dental")}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-300 ${
                  activeIndustry === "dental"
                    ? "bg-white text-neutral-900 shadow-sm"
                    : "text-neutral-500 hover:text-neutral-800"
                }`}
              >
                Dental Clinics
              </button>
              <button
                onClick={() => setActiveIndustry("services")}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-300 ${
                  activeIndustry === "services"
                    ? "bg-white text-neutral-900 shadow-sm"
                    : "text-neutral-500 hover:text-neutral-800"
                }`}
              >
                Service Businesses
              </button>
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight text-neutral-900 leading-[1.05] max-w-4xl"
          >
            Make Your Business{" "}
            <span className="text-[#f97316] relative inline-block">
              Work Smarter.
              {/* Reference subtle glow underline */}
              <span className="absolute left-0 right-0 -bottom-1 h-[3px] bg-gradient-to-r from-orange-400 via-orange-500 to-transparent rounded-full opacity-80" />
            </span>
          </motion.h1>

          {/* Supporting text */}
          <motion.p
            variants={itemVariants}
            className="mt-6 text-lg sm:text-xl text-neutral-600 max-w-2xl leading-relaxed font-light"
          >
            {activeIndustry === "dental"
              ? "AI voice agents, appointment booking automations, and modern websites that help dental practices capture patients and eliminate phone tag."
              : "AI voice agents, intelligent automations, and modern websites that help service businesses capture leads and scale operations seamlessly."}
          </motion.p>

          {/* CTAs with fluid hover physics */}
          <motion.div variants={itemVariants} className="mt-9 flex flex-col sm:flex-row gap-3.5 items-center">
            <motion.a
              whileHover={{ scale: 1.025, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2, ease }}
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 px-8 py-4 bg-neutral-900 text-white text-sm font-semibold rounded-full hover:bg-neutral-800 transition-colors shadow-xl shadow-neutral-900/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-neutral-900"
            >
              <WhatsAppIcon className="w-4 h-4 text-[#25D366] transition-transform duration-200 group-hover:scale-110" />
              <span>Chat on WhatsApp</span>
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2, ease }}
              href="#journey"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("journey")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 px-8 py-4 border border-neutral-300 bg-white text-neutral-800 text-sm font-semibold rounded-full hover:bg-neutral-50 hover:border-neutral-400 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-neutral-400 shadow-xs"
            >
              Explore How It Works
            </motion.a>
          </motion.div>

          {/* Reference Video Feature: Central Interactive Mockup with Flow Conduit */}
          <motion.div
            variants={itemVariants}
            className="mt-16 lg:mt-20 w-full max-w-4xl relative"
          >
            <div className="relative rounded-3xl bg-neutral-50/95 border border-neutral-200/90 p-8 lg:p-12 shadow-2xl shadow-neutral-200/60 backdrop-blur-xs">
              <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-14">
                {/* Phone mockup */}
                <div className="flex-shrink-0">
                  <PhoneMockup industry={activeIndustry} />
                </div>

                {/* Workflow narrative */}
                <div className="flex-1 space-y-6 text-left">
                  <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100/80 text-orange-700 text-xs font-semibold mb-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
                      Live AI Receptionist Workflow
                    </div>
                    <h2 className="text-xl lg:text-2xl font-bold text-neutral-900 leading-snug">
                      {activeIndustry === "dental"
                        ? "Zero missed patient calls. Instant automated bookings."
                        : "Never miss an incoming customer enquiry again."}
                    </h2>
                    <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
                      While your team focuses on on-site clients, the UNOS AI Voice Agent answers immediately, resolves frequent questions, and captures booked slots directly into your calendar.
                    </p>
                  </div>

                  {/* Flow Steps */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                    <WorkflowNode
                      label="Incoming Call"
                      sub="Patient rings line"
                      icon={
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20" stroke="currentColor" strokeWidth="1.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                        </svg>
                      }
                    />
                    <WorkflowNode
                      label="Voice Agent"
                      sub="Natural human dialogue"
                      icon={
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20" stroke="currentColor" strokeWidth="1.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6-4h6M5 8h.01M5 12h.01M3 5a2 2 0 012-2h10a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z" />
                        </svg>
                      }
                    />
                    <WorkflowNode
                      label="Data Extracted"
                      sub="Name, timing & reason"
                      icon={
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20" stroke="currentColor" strokeWidth="1.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                        </svg>
                      }
                    />
                    <WorkflowNode
                      label="Confirmed"
                      sub="Synced to Calendar & WA"
                      icon={
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20" stroke="currentColor" strokeWidth="1.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      }
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Reference Video Feature: Conduit Exit Wire heading to the next section */}
            <div className="flex justify-center -mb-8 mt-6" aria-hidden="true">
              <div className="relative flex flex-col items-center">
                <div className="w-[2px] h-14 bg-gradient-to-b from-orange-500/80 via-orange-400 to-neutral-200" />
                <div className="w-3 h-3 rounded-full bg-orange-500 ring-4 ring-orange-100 shadow-sm" />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
