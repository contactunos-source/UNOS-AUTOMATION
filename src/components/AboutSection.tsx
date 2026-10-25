"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const tools = [
  { name: "n8n", label: "n8n Workflows" },
  { name: "Make", label: "Make / Integromat" },
  { name: "Vapi", label: "Vapi Voice AI" },
  { name: "Next.js", label: "Next.js & React" },
  { name: "Twilio", label: "Twilio Telecom" },
  { name: "OpenAI", label: "OpenAI LLMs" },
  { name: "WhatsApp API", label: "WhatsApp Business API" },
];

function FounderImage() {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="relative aspect-[4/5] w-full max-w-sm rounded-3xl overflow-hidden bg-neutral-100 border border-neutral-200 shadow-xl">
      {/* Placeholder — always rendered as the base layer */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-neutral-50">
        <div className="w-20 h-20 rounded-full bg-neutral-200 flex items-center justify-center">
          <svg className="w-10 h-10 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
          </svg>
        </div>
        <p className="text-xs text-neutral-500 font-medium">Founder portrait</p>
        <p className="text-[11px] text-neutral-400 px-4 text-center">Place your portrait photo at<br />/public/images/founder.jpg</p>
      </div>

      {/* Real image — rendered on top; hidden if load fails */}
      {!imgError && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src="/images/founder.jpg"
          alt="Founder of UNOS AUTOMATIONS"
          onError={() => setImgError(true)}
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}
    </div>
  );
}

export default function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="py-24 lg:py-32 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl mb-16"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-orange-600 mb-4">
            About Us
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 tracking-tight leading-tight">
            Technology With a Human Touch.
          </h2>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: portrait */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <FounderImage />
          </motion.div>

          {/* Right: text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-6"
          >
            <p className="text-lg text-neutral-700 leading-relaxed font-light">
              UNOS AUTOMATIONS helps businesses simplify repetitive work through AI-powered voice agents,
              connected workflows, and modern websites. Our focus is on building practical solutions that
              make customer interactions and everyday operations more efficient.
            </p>

            <p className="text-base text-neutral-600 leading-relaxed">
              We work primarily with service-based businesses — dental clinics, healthcare practices, and professional
              service providers — who want to use technology to handle more enquiries, capture more leads, and
              spend less time on tasks that can be automated.
            </p>

            <p className="text-base text-neutral-600 leading-relaxed">
              Every solution we build is practical, properly integrated, and designed around how your business
              actually works — not generic off-the-shelf tools.
            </p>

            {/* Divider */}
            <div className="pt-2 border-t border-neutral-100" />

            {/* Tools */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-neutral-500 mb-4">
                Core Integrations & Stack
              </p>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool) => (
                  <span
                    key={tool.name}
                    className="px-3.5 py-1.5 bg-neutral-50 border border-neutral-200/90 rounded-full text-xs font-medium text-neutral-700 shadow-sm"
                  >
                    {tool.label}
                  </span>
                ))}
              </div>
            </div>

            {/* Values row */}
            <div className="pt-4 grid grid-cols-3 gap-4">
              {[
                { label: "Practical", desc: "Real automations, no buzzwords" },
                { label: "Transparent", desc: "Honest advice on what's viable" },
                { label: "Client-Centric", desc: "Tailored to your clinic or firm" },
              ].map((v) => (
                <div key={v.label} className="space-y-1">
                  <p className="text-sm font-semibold text-neutral-900">{v.label}</p>
                  <p className="text-xs text-neutral-500 leading-snug">{v.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
