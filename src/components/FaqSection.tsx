"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/lib/config";

const ease = [0.16, 1, 0.3, 1] as const;

const faqs = [
  {
    question: "How natural does the AI Voice Agent sound to calling patients?",
    answer:
      "Our voice agents use low-latency, state-of-the-art neural speech models that sound human and conversational. They understand speech cadence, handle interruptions naturally, and answer common practice questions without robotic pauses or delays.",
  },
  {
    question: "Do we need to replace our current phone number or phone carrier?",
    answer:
      "No. You keep your existing business or clinic phone number with zero carrier changes. We set up simple conditional or overflow call forwarding — so the AI answers whenever your lines are busy, after-hours, or 24/7.",
  },
  {
    question: "What happens if a patient has an urgent medical question or complex enquiry?",
    answer:
      "The AI agent is trained with strict clinical and operational boundaries. If a patient mentions severe symptoms, acute pain, or requests a human manager, the agent immediately transfers the call to your on-call team or sends an instant priority WhatsApp/SMS alert.",
  },
  {
    question: "How does the booking connect to our calendar and CRM systems?",
    answer:
      "We connect via direct APIs or secure workflow integrations to Google Calendar, Microsoft Outlook, HubSpot, Dentrix, Jane App, Google Sheets, and custom databases. Available slots reflect your live calendar with zero double-booking.",
  },
  {
    question: "How long does it take UNOS AUTOMATIONS to build and deploy our solution?",
    answer:
      "Most core voice agents and appointment workflows are tailored, tested, and live within 48 to 72 hours. We run thorough call simulations with you before any live patient calls are routed.",
  },
  {
    question: "Is patient and client data kept strictly private and compliant?",
    answer:
      "Yes. All call transcripts, patient details, and intake forms are encrypted in transit and at rest. We never sell, share, or use your business data for public model training.",
  },
];

export default function FaqSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" ref={ref} className="py-24 lg:py-32 bg-neutral-50/60 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 relative">
        {/* Reference Video Feature: Section Anchor Badge (Frame 018) */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-950 text-white text-xs font-bold tracking-wider uppercase mb-4 shadow-md border border-neutral-800">
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
            FAQ
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 tracking-tight leading-tight">
            Frequently Asked Questions.
          </h2>
          <p className="mt-4 text-base lg:text-lg text-neutral-600 font-light max-w-xl">
            Everything you need to know about implementing autonomous voice agents and workflows with UNOS AUTOMATIONS.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="space-y-3.5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.08, ease }}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "bg-white border-orange-200/90 shadow-lg shadow-orange-500/5 ring-1 ring-orange-100"
                    : "bg-white/80 border-neutral-200/80 hover:border-neutral-300 hover:bg-white shadow-xs"
                }`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full py-5 px-6 sm:px-7 flex items-center justify-between gap-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-semibold text-neutral-900 leading-snug">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? "bg-orange-500 text-white rotate-180 shadow-xs" : "bg-neutral-100 text-neutral-600"
                    }`}
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 sm:px-7 pb-6 pt-1 text-sm sm:text-base text-neutral-600 leading-relaxed font-light border-t border-neutral-100">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
