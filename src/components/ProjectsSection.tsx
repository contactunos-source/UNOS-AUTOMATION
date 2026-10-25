"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

// Phone Mockup (Demo 1)
function DentalPhoneMockup() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    { title: "Caller Verified", detail: "David K. (Existing Patient)", time: "00:15" },
    { title: "Intent Identified", detail: "Emergency Tooth Ache", time: "00:42" },
    { title: "Slot Reserved", detail: "Thursday 10:30 AM (Dr. Miller)", time: "01:14" },
  ];

  return (
    <div className="relative mx-auto" style={{ width: 236 }}>
      <div className="relative rounded-[42px] overflow-hidden shadow-2xl border-[6px] border-neutral-900 bg-[#0c0f16] hardware-accelerated">
        <div className="flex justify-center pt-3 pb-1">
          <div className="w-24 h-6 rounded-full bg-black flex items-center justify-center gap-2 border border-white/10">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-white text-[9px] font-medium tracking-tight">Active Voice AI</span>
          </div>
        </div>
        <div className="flex flex-col items-center px-4 pt-2 pb-6 text-center" style={{ minHeight: 340, background: "linear-gradient(180deg,#151926,#0d1017)" }}>
          <div className="flex flex-col items-center gap-1.5 mt-2 mb-3">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center text-white font-bold text-base shadow-lg shadow-orange-500/30">
              DC
            </div>
            <p className="text-white text-sm font-semibold">Apex Dental Clinic</p>
            <p className="text-emerald-400 text-[11px] font-medium">AI Receptionist Live Demo</p>
          </div>

          <div className="flex items-center gap-1 h-6 my-1">
            {[0.4, 0.8, 1, 0.6, 0.9, 0.5, 0.7].map((h, i) => (
              <span
                key={i}
                className="w-1 bg-orange-400 rounded-full"
                style={{
                  height: `${Math.round(h * 20)}px`,
                  animation: `wave-bar 0.8s ease-in-out ${i * 0.1}s infinite alternate`,
                }}
              />
            ))}
          </div>

          <div className="mt-3 space-y-2 w-full text-left">
            {steps.map((st, i) => (
              <div
                key={i}
                onClick={() => setActiveStep(i)}
                className={`p-2.5 rounded-xl border transition-all cursor-pointer ${
                  activeStep === i
                    ? "bg-white/15 border-orange-400/60 shadow-xs"
                    : "bg-white/5 border-white/10 hover:bg-white/10"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-semibold text-white/90">{st.title}</span>
                  <span className="text-[9px] font-mono text-orange-400">{st.time}</span>
                </div>
                <p className="text-[10px] text-white/60 mt-0.5">{st.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute inset-0 -z-10 blur-3xl opacity-25 rounded-[42px]" style={{ background: "radial-gradient(circle,#f97316,transparent 70%)" }} aria-hidden="true" />
    </div>
  );
}

// Workflow Visualization (Demo 2)
function WorkflowViz() {
  return (
    <div className="w-full px-2 space-y-5">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
        {[
          { label: "1. Inbound Query", sub: "Web Form / WhatsApp", color: "bg-blue-50 border-blue-200 text-blue-700" },
          { label: "2. AI Extraction", sub: "Lead Data Categorized", color: "bg-orange-50 border-orange-200 text-orange-700" },
          { label: "3. CRM Sync", sub: "Google Sheets & HubSpot", color: "bg-purple-50 border-purple-200 text-purple-700" },
          { label: "4. Auto Follow-Up", sub: "Instant WhatsApp Alert", color: "bg-emerald-50 border-emerald-200 text-emerald-700" },
        ].map((step, i) => (
          <div key={i} className={`p-3 rounded-2xl border ${step.color} shadow-xs text-center space-y-1`}>
            <p className="text-xs font-bold">{step.label}</p>
            <p className="text-[10px] opacity-80">{step.sub}</p>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-2xl border border-neutral-200 p-5 shadow-xs space-y-3">
        <div className="flex items-center justify-between text-xs font-semibold text-neutral-500 pb-2 border-b border-neutral-100">
          <span>Live Execution Trace</span>
          <span className="text-emerald-600 font-bold">100% Automated</span>
        </div>
        <div className="space-y-2 text-xs font-mono">
          <div className="p-2.5 bg-neutral-50 rounded-xl border border-neutral-100 flex items-center justify-between">
            <span className="text-neutral-700">payload.type = &ldquo;dental_consultation&rdquo;</span>
            <span className="text-emerald-600 font-bold">PARSED</span>
          </div>
          <div className="p-2.5 bg-neutral-50 rounded-xl border border-neutral-100 flex items-center justify-between">
            <span className="text-neutral-700">sheets.appendRow([&ldquo;David K.&rdquo;, &ldquo;10:30 AM&rdquo;])</span>
            <span className="text-blue-600 font-bold">APPENDED</span>
          </div>
          <div className="p-2.5 bg-neutral-50 rounded-xl border border-neutral-100 flex items-center justify-between">
            <span className="text-neutral-700">whatsapp.sendTemplate(&ldquo;booking_confirmed&rdquo;)</span>
            <span className="text-emerald-600 font-bold">DISPATCHED</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// Browser Mockup (Demo 3)
function BrowserMockup() {
  return (
    <div className="w-full max-w-lg mx-auto rounded-2xl overflow-hidden border border-neutral-200 shadow-xl bg-white hardware-accelerated">
      <div className="bg-neutral-100 border-b border-neutral-200 px-4 py-2.5 flex items-center gap-3">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
        </div>
        <div className="flex-1 bg-white rounded-md px-3 py-1 text-xs text-neutral-500 border border-neutral-200 flex items-center justify-between">
          <span>clientclinic.com</span>
          <span className="text-[10px] text-emerald-600 font-semibold">99+ Google PageSpeed</span>
        </div>
      </div>
      <div className="p-5 space-y-4">
        <div className="flex items-center justify-between">
          <div className="h-4 w-28 bg-neutral-900 rounded-full" />
          <div className="flex gap-2">
            {[1, 2, 3].map((i) => <div key={i} className="h-2 w-10 bg-neutral-200 rounded-full" />)}
          </div>
        </div>
        <div className="p-6 bg-neutral-50 rounded-2xl text-center space-y-2 border border-neutral-100">
          <div className="h-5 w-3/4 bg-neutral-900 rounded-full mx-auto" />
          <div className="h-3 w-1/2 bg-neutral-300 rounded-full mx-auto" />
          <div className="pt-2 flex justify-center gap-2">
            <div className="h-7 w-24 bg-orange-500 rounded-full" />
            <div className="h-7 w-24 bg-white border border-neutral-200 rounded-full" />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {["AI Voice Reception", "Instant Booking", "Google Reviews"].map((t, i) => (
            <div key={i} className="p-2.5 rounded-xl border border-neutral-200 text-center">
              <p className="text-[10px] font-bold text-neutral-800">{t}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const demos = [
  {
    id: "voice-agent",
    tab: "AI Dental Receptionist",
    badge: "Interactive Voice Simulation",
    badgeColor: "bg-orange-100 text-orange-700",
    heading: "AI Voice Agent for Dental Practices",
    description:
      "A voice agent configured to answer incoming clinic calls, answer patient FAQs, capture contact info, and assist with appointment bookings — keeping chair time focused on patients.",
    note: "Simulated demonstration. Ready for live Twilio / Vapi telephony connection with your clinic number.",
  },
  {
    id: "lead-capture",
    tab: "Lead Capture Automation",
    badge: "Connected Workflow",
    badgeColor: "bg-blue-100 text-blue-700",
    heading: "Automated Lead Capture & Instant Follow-Up",
    description:
      "When a new patient or client reaches out through your website form or WhatsApp, this automated workflow captures lead details, creates records in your CRM/Sheets, and triggers follow-up.",
    note: "Live workflow template tested with n8n, Make, Google Workspace, and WhatsApp Business API.",
  },
  {
    id: "website",
    tab: "Business Website Development",
    badge: "High-Converting Design",
    badgeColor: "bg-purple-100 text-purple-700",
    heading: "High-Performance Websites for Service Businesses",
    description:
      "Modern, ultra-fast websites designed with clean Apple-inspired minimalism. Built with Next.js and Tailwind CSS for top SEO performance, instant page loads, and clear conversion paths.",
    note: "Custom design and build tailored to your business brand and client workflow.",
  },
];

export default function ProjectsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [active, setActive] = useState(0);

  return (
    <section id="projects" className="py-24 lg:py-32 bg-neutral-50/60 relative overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease }}
          className="max-w-2xl mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-100 text-orange-600 text-xs font-semibold uppercase tracking-wider mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
            Interactive Portfolio
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 tracking-tight leading-tight">
            See the Automation in Action.
          </h2>
          <p className="mt-4 text-lg text-neutral-600 leading-relaxed font-light">
            Explore practical demonstrations of how UNOS AUTOMATIONS deploys AI voice agents and business workflows.
          </p>
        </motion.div>

        {/* Reference Video Feature: Fluid Horizontal Segment Tabs (Frame 012) */}
        <div className="flex flex-wrap gap-2.5 mb-10" role="tablist" aria-label="Project demos">
          {demos.map((d, i) => (
            <button
              key={d.id}
              role="tab"
              aria-selected={active === i}
              onClick={() => setActive(i)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 ${
                active === i
                  ? "bg-neutral-950 text-white shadow-lg shadow-neutral-900/15"
                  : "bg-white border border-neutral-200/90 text-neutral-600 hover:border-neutral-300 hover:text-neutral-900 shadow-2xs"
              }`}
            >
              {d.tab}
            </button>
          ))}
        </div>

        {/* Panel with Smooth AnimatePresence */}
        <AnimatePresence mode="wait">
          {demos.map((demo, i) =>
            active === i ? (
              <motion.div
                key={demo.id}
                role="tabpanel"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.4, ease }}
                className="bg-white rounded-[32px] border border-neutral-200/90 shadow-2xl shadow-neutral-200/40 p-8 lg:p-14"
              >
                <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-center">
                  <div className="lg:max-w-xs xl:max-w-sm flex-shrink-0 space-y-4">
                    <span className={`inline-block px-3 py-1 rounded-full text-[11px] font-bold ${demo.badgeColor}`}>
                      {demo.badge}
                    </span>
                    <h3 className="text-2xl font-bold text-neutral-900 leading-snug">
                      {demo.heading}
                    </h3>
                    <p className="text-sm text-neutral-600 leading-relaxed font-light">
                      {demo.description}
                    </p>
                    <p className="text-xs text-neutral-400 italic pt-1">{demo.note}</p>

                    <div className="flex flex-wrap gap-3 pt-3">
                      <a
                        href="#contact"
                        onClick={(e) => {
                          e.preventDefault();
                          document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                        }}
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-neutral-900 text-white text-xs font-semibold rounded-full hover:bg-neutral-800 transition-colors shadow-sm"
                      >
                        <span>Inquire About This Flow</span>
                        <span className="text-orange-400 font-bold">→</span>
                      </a>
                    </div>
                  </div>

                  <div className="flex-1 w-full flex items-center justify-center min-h-[350px] bg-neutral-50/70 rounded-2xl p-6 border border-neutral-100">
                    {demo.id === "voice-agent" && <DentalPhoneMockup />}
                    {demo.id === "lead-capture" && <WorkflowViz />}
                    {demo.id === "website" && <BrowserMockup />}
                  </div>
                </div>
              </motion.div>
            ) : null
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
