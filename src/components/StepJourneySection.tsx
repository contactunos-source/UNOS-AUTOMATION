"use client";

import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

// Coupler Capsule (inspired by the tactile nodes on the reference wire in frames 004 & 006)
function ConduitCoupler({ active = false }: { active?: boolean }) {
  return (
    <div className="relative flex items-center justify-center" aria-hidden="true">
      <div className="w-4 h-10 rounded-full bg-neutral-100 border border-neutral-300 shadow-xs flex items-center justify-center p-0.5">
        <div className={`w-2.5 h-6 rounded-full transition-all duration-500 ${active ? "bg-orange-500 shadow-sm shadow-orange-500/50" : "bg-neutral-300"}`} />
      </div>
    </div>
  );
}

// Conduit Side Wire with animated glowing orange pulses on both sides
function ConduitSideWire({
  side,
  delay = "0s",
  duration = "4s",
}: {
  side: "left" | "right";
  delay?: string;
  duration?: string;
}) {
  const isLeft = side === "left";
  // Left wire curves towards right (towards card: x=48); Right wire curves towards left (towards card: x=0)
  const pathD = isLeft
    ? "M 24 0 L 24 60 C 24 100, 48 100, 48 140 L 48 240 C 48 280, 24 280, 24 360"
    : "M 24 0 L 24 60 C 24 100, 0 100, 0 140 L 0 240 C 0 280, 24 280, 24 360";

  return (
    <div
      className={`hidden md:block absolute ${
        isLeft ? "-left-8 lg:-left-12" : "-right-8 lg:-right-12"
      } top-0 bottom-0 w-8 lg:w-12 pointer-events-none select-none z-10`}
      aria-hidden="true"
    >
      <svg
        className="w-full h-full overflow-visible"
        viewBox="0 0 48 360"
        fill="none"
        preserveAspectRatio="none"
      >
        {/* Base silver track */}
        <path
          d={pathD}
          stroke="#e5e7eb"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        {/* Luminous glowing orange pulse */}
        <path
          d={pathD}
          stroke="#f97316"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeDasharray="16 180"
          style={{
            animation: `conduitFlow ${duration} linear infinite`,
            animationDelay: delay,
            filter: "drop-shadow(0 0 4px rgba(249, 115, 22, 0.7))",
          }}
        />
      </svg>
    </div>
  );
}

export default function StepJourneySection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 35 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease } },
  };

  return (
    <section id="journey" ref={ref} className="py-24 lg:py-32 bg-white relative overflow-hidden">
      {/* Background ambient gradient */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[700px] rounded-full opacity-[0.05] pointer-events-none"
        style={{ background: "radial-gradient(circle, #f97316 0%, transparent 70%)" }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease }}
          className="max-w-2xl mb-16 lg:mb-24"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-100 text-orange-600 text-xs font-semibold uppercase tracking-wider mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
            The Autonomous Pipeline
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 tracking-tight leading-tight">
            How UNOS Automations Powers Your Practice.
          </h2>
          <p className="mt-4 text-lg text-neutral-600 leading-relaxed font-light">
            We connect directly with the tools you already rely on — handling incoming calls, sorting patient enquiries, and confirming appointments hands-free.
          </p>
        </motion.div>

        {/* ─── STEP 1 (Reference Video Frame 004 Layout) ─── */}
        <div className="relative mb-20 lg:mb-28">
          {/* Conduit Wires on Both Sides */}
          <ConduitSideWire side="left" delay="0s" duration="4s" />
          <ConduitSideWire side="right" delay="-2s" duration="4s" />

          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="relative rounded-[32px] bg-neutral-50/80 border border-neutral-200/90 p-8 lg:p-14 shadow-xl shadow-neutral-200/40 hover:border-orange-200 hover:shadow-2xl transition-all duration-400 group"
          >
            {/* Reference Video Step Badge Anchor */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-950 text-white text-xs font-bold tracking-wider uppercase mb-6 shadow-md border border-neutral-800">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
              STEP 1
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-6 space-y-4">
                <h3 className="text-2xl lg:text-3xl font-bold text-neutral-900 leading-snug">
                  We connect to your existing phone line and communication channels.
                </h3>
                <p className="text-base text-neutral-600 leading-relaxed font-light">
                  No complicated migrations or carrier switches. We route incoming calls, web form inquiries, and WhatsApp queries directly into your custom UNOS Voice and Automation Engine.
                </p>
                <div className="pt-2 flex flex-wrap gap-2 text-xs font-semibold text-neutral-700">
                  <span className="px-3 py-1.5 bg-white rounded-lg border border-neutral-200/80 shadow-xs">Twilio Telephony</span>
                  <span className="px-3 py-1.5 bg-white rounded-lg border border-neutral-200/80 shadow-xs">WhatsApp Business API</span>
                  <span className="px-3 py-1.5 bg-white rounded-lg border border-neutral-200/80 shadow-xs">Zero Carrier Downtime</span>
                </div>
              </div>

              {/* Interactive Visual Right */}
              <div className="lg:col-span-6 bg-white rounded-2xl border border-neutral-200/80 p-6 shadow-sm space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-neutral-100">
                  <span className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">Inbound Route Status</span>
                  <span className="text-xs text-emerald-600 font-semibold flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    Active (24/7 Monitored)
                  </span>
                </div>

                <div className="space-y-2.5">
                  <div className="p-3 bg-neutral-50 rounded-xl border border-neutral-200/60 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-orange-500 text-white flex items-center justify-center font-bold text-xs">
                        📞
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-neutral-900">Clinic Main Line (Inbound Call)</p>
                        <p className="text-[11px] text-neutral-500">Live call routed to AI Receptionist</p>
                      </div>
                    </div>
                    <span className="text-xs text-orange-600 font-mono font-medium">0ms latency</span>
                  </div>

                  <div className="p-3 bg-neutral-50 rounded-xl border border-neutral-200/60 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-emerald-500 text-white flex items-center justify-center font-bold text-xs">
                        💬
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-neutral-900">WhatsApp Intake Engine</p>
                        <p className="text-[11px] text-neutral-500">Syncing chat enquiries in real-time</p>
                      </div>
                    </div>
                    <span className="text-xs text-emerald-600 font-mono font-medium">Connected</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Subtle top glow line on hover */}
            <div className="absolute inset-x-12 top-0 h-[2px] bg-gradient-to-r from-transparent via-orange-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
          </motion.div>
        </div>

        {/* Inter-step pipeline connector (Step 1 -> Step 2) */}
        <div className="flex flex-col items-center justify-center -mt-12 -mb-12 lg:-mt-16 lg:-mb-16 relative z-20 pointer-events-none" aria-hidden="true">
          <div className="w-[2px] h-12 lg:h-14 bg-gradient-to-b from-neutral-300 via-orange-400 to-neutral-300 relative overflow-hidden">
            <div
              className="absolute inset-x-0 w-full h-5 bg-orange-500 rounded-full shadow-[0_0_8px_#f97316]"
              style={{ animation: "conduitFlow 2.4s linear infinite" }}
            />
          </div>
          <div className="my-1">
            <ConduitCoupler active={true} />
          </div>
          <div className="w-[2px] h-12 lg:h-14 bg-gradient-to-b from-neutral-300 via-orange-400 to-neutral-300 relative overflow-hidden">
            <div
              className="absolute inset-x-0 w-full h-5 bg-orange-500 rounded-full shadow-[0_0_8px_#f97316]"
              style={{ animation: "conduitFlow 2.4s linear infinite", animationDelay: "-1.2s" }}
            />
          </div>
        </div>

        {/* ─── STEP 2 (Reference Video Frame 006 Layout) ─── */}
        <div className="relative mb-20 lg:mb-28">
          {/* Conduit Wires on Both Sides */}
          <ConduitSideWire side="left" delay="-1.3s" duration="4s" />
          <ConduitSideWire side="right" delay="-3.3s" duration="4s" />
          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="relative rounded-[32px] bg-neutral-50/80 border border-neutral-200/90 p-8 lg:p-14 shadow-xl shadow-neutral-200/40 hover:border-orange-200 hover:shadow-2xl transition-all duration-400 group"
          >
            {/* Step Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-950 text-white text-xs font-bold tracking-wider uppercase mb-6 shadow-md border border-neutral-800">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
              STEP 2
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-6 space-y-4">
                <h3 className="text-2xl lg:text-3xl font-bold text-neutral-900 leading-snug">
                  The AI Receptionist converses naturally, answers FAQs, and triages patients.
                </h3>
                <p className="text-base text-neutral-600 leading-relaxed font-light">
                  Trained on your specific procedures, opening hours, pricing, and dentist availability. It sounds human, handles interrupts naturally, and gathers all necessary intake details.
                </p>
                <div className="pt-2 flex flex-wrap gap-2 text-xs font-semibold text-neutral-700">
                  <span className="px-3 py-1.5 bg-white rounded-lg border border-neutral-200/80 shadow-xs">Natural Cadence & Accent</span>
                  <span className="px-3 py-1.5 bg-white rounded-lg border border-neutral-200/80 shadow-xs">FAQ Extraction</span>
                  <span className="px-3 py-1.5 bg-white rounded-lg border border-neutral-200/80 shadow-xs">Emergency Escalation</span>
                </div>
              </div>

              {/* Interactive Visual Right */}
              <div className="lg:col-span-6 bg-white rounded-2xl border border-neutral-200/80 p-6 shadow-sm space-y-3">
                <div className="p-3 rounded-xl bg-orange-50/60 border border-orange-100 flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-orange-500 text-white flex items-center justify-center text-[10px] font-bold mt-0.5">
                    AI
                  </div>
                  <p className="text-xs text-neutral-800 leading-relaxed">
                    &ldquo;Hi, thank you for calling Apex Dental! Are you looking to schedule a cleaning or do you have urgent dental pain?&rdquo;
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-neutral-100/70 border border-neutral-200/60 flex items-start gap-3 ml-4">
                  <div className="w-6 h-6 rounded-full bg-neutral-800 text-white flex items-center justify-center text-[10px] font-bold mt-0.5">
                    P
                  </div>
                  <p className="text-xs text-neutral-700 leading-relaxed">
                    &ldquo;I need a routine cleaning next Thursday morning if Dr. Miller is free.&rdquo;
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-orange-50/60 border border-orange-100 flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-orange-500 text-white flex items-center justify-center text-[10px] font-bold mt-0.5">
                    AI
                  </div>
                  <p className="text-xs text-neutral-800 leading-relaxed">
                    &ldquo;Dr. Miller has a 10:30 AM slot open this Thursday! I&apos;ve reserved that for you and sent the confirmation to your phone.&rdquo;
                  </p>
                </div>
              </div>
            </div>

            {/* Subtle top glow line on hover */}
            <div className="absolute inset-x-12 top-0 h-[2px] bg-gradient-to-r from-transparent via-orange-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
          </motion.div>
        </div>

        {/* Inter-step pipeline connector (Step 2 -> Step 3) */}
        <div className="flex flex-col items-center justify-center -mt-12 -mb-12 lg:-mt-16 lg:-mb-16 relative z-20 pointer-events-none" aria-hidden="true">
          <div className="w-[2px] h-12 lg:h-14 bg-gradient-to-b from-neutral-300 via-orange-400 to-neutral-300 relative overflow-hidden">
            <div
              className="absolute inset-x-0 w-full h-5 bg-orange-500 rounded-full shadow-[0_0_8px_#f97316]"
              style={{ animation: "conduitFlow 2.4s linear infinite" }}
            />
          </div>
          <div className="my-1">
            <ConduitCoupler active={true} />
          </div>
          <div className="w-[2px] h-12 lg:h-14 bg-gradient-to-b from-neutral-300 via-orange-400 to-neutral-300 relative overflow-hidden">
            <div
              className="absolute inset-x-0 w-full h-5 bg-orange-500 rounded-full shadow-[0_0_8px_#f97316]"
              style={{ animation: "conduitFlow 2.4s linear infinite", animationDelay: "-1.2s" }}
            />
          </div>
        </div>

        {/* ─── STEP 3 (Reference Video Frame 008 Layout) ─── */}
        <div className="relative">
          {/* Conduit Wires on Both Sides */}
          <ConduitSideWire side="left" delay="-2.6s" duration="4s" />
          <ConduitSideWire side="right" delay="-0.6s" duration="4s" />
          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="relative rounded-[32px] bg-neutral-50/80 border border-neutral-200/90 p-8 lg:p-14 shadow-xl shadow-neutral-200/40 hover:border-orange-200 hover:shadow-2xl transition-all duration-400 group"
          >
            {/* Step Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-950 text-white text-xs font-bold tracking-wider uppercase mb-6 shadow-md border border-neutral-800">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
              STEP 3
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-6 space-y-4">
                <h3 className="text-2xl lg:text-3xl font-bold text-neutral-900 leading-snug">
                  Appointments, CRM leads, and reminders sync straight to your existing system.
                </h3>
                <p className="text-base text-neutral-600 leading-relaxed font-light">
                  The appointment appears in your calendar. The patient receives an automated WhatsApp reminder to eliminate no-shows, and your staff simply views the confirmed schedule.
                </p>
                <div className="pt-2 flex flex-wrap gap-2 text-xs font-semibold text-neutral-700">
                  <span className="px-3 py-1.5 bg-white rounded-lg border border-neutral-200/80 shadow-xs">Google & Outlook Calendar</span>
                  <span className="px-3 py-1.5 bg-white rounded-lg border border-neutral-200/80 shadow-xs">CRM & Google Sheets Sync</span>
                  <span className="px-3 py-1.5 bg-white rounded-lg border border-neutral-200/80 shadow-xs">Instant WhatsApp Confirmation</span>
                </div>
              </div>

              {/* Interactive Visual Right */}
              <div className="lg:col-span-6 grid grid-cols-2 gap-3">
                <div className="bg-white rounded-2xl border border-neutral-200/80 p-4 shadow-sm space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold text-orange-600 uppercase">Calendar Sync</span>
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  </div>
                  <p className="text-xs font-semibold text-neutral-900">Thursday 10:30 AM</p>
                  <p className="text-[11px] text-neutral-500">Dr. Miller · Patient: David K.</p>
                  <div className="px-2 py-1 bg-emerald-50 text-emerald-700 rounded text-[10px] font-medium inline-block">
                    ✓ Booked
                  </div>
                </div>

                <div className="bg-white rounded-2xl border border-neutral-200/80 p-4 shadow-sm space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold text-emerald-600 uppercase">WhatsApp Alert</span>
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  </div>
                  <p className="text-xs font-semibold text-neutral-900">Intake Reminder Sent</p>
                  <p className="text-[11px] text-neutral-500">Includes clinic location link</p>
                  <div className="px-2 py-1 bg-blue-50 text-blue-700 rounded text-[10px] font-medium inline-block">
                    ✓ Delivered
                  </div>
                </div>
              </div>
            </div>

            {/* Subtle top glow line on hover */}
            <div className="absolute inset-x-12 top-0 h-[2px] bg-gradient-to-r from-transparent via-orange-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
