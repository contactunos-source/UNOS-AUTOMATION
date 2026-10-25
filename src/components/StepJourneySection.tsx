"use client";

import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";
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
          {/* Conduit Wire Trace Left */}
          <div className="hidden lg:block absolute -left-12 top-0 bottom-0 w-12 pointer-events-none" aria-hidden="true">
            <svg className="w-full h-full" viewBox="0 0 48 360" fill="none" preserveAspectRatio="none">
              <path
                d="M 24 0 L 24 60 C 24 100, 48 100, 48 140 L 48 240 C 48 280, 24 280, 24 360"
                stroke="#e5e7eb"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <path
                d="M 24 0 L 24 60 C 24 100, 48 100, 48 140 L 48 240 C 48 280, 24 280, 24 360"
                stroke="#f97316"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeDasharray="16 180"
                style={{ animation: "conduitFlow 4s linear infinite" }}
              />
            </svg>
          </div>

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
                        <p className="text-xs font-semibold text-neutral-900">Clinic Main Line (+91 9182078320)</p>
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
          </motion.div>
        </div>

        {/* ─── STEP 2 (Reference Video Frame 006 Layout) ─── */}
        <div className="relative mb-20 lg:mb-28">
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
          </motion.div>
        </div>

        {/* ─── STEP 3 (Reference Video Frame 008 Layout) ─── */}
        <div className="relative">
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

                <div className="col-span-2 bg-neutral-900 text-white rounded-2xl p-4 flex items-center justify-between shadow-md">
                  <div>
                    <p className="text-xs font-bold tracking-tight">Ready to see this for your clinic or business?</p>
                    <p className="text-[11px] text-neutral-400">We set up and test your first voice agent in 48 hours.</p>
                  </div>
                  <a
                    href={siteConfig.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#25D366] text-white text-xs font-semibold rounded-full hover:bg-[#20ba59] transition-colors"
                  >
                    <WhatsAppIcon className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
