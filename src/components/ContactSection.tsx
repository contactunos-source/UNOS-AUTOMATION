"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { siteConfig } from "@/lib/config";

const services = [
  "AI Voice Agents (Dental / Clinic / Local Business)",
  "Business Website Development",
  "Workflow Automation (n8n / Make / APIs)",
  "Appointment Booking Automation",
  "WhatsApp, CRM & Lead Automation",
  "Custom Automation Consultation",
];

type FormState = "idle" | "loading" | "success" | "error";

interface FormData {
  fullName: string;
  businessName: string;
  email: string;
  phone: string;
  service: string;
  description: string;
  preferredTime: string;
}

const initialForm: FormData = {
  fullName: "",
  businessName: "",
  email: "",
  phone: "",
  service: "",
  description: "",
  preferredTime: "",
};

// WhatsApp Icon
function WhatsAppIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function FormField({
  label,
  required,
  error,
  children,
}: {
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-1.5">
      <label className="block text-sm font-medium text-neutral-800">
        {label} {required && <span className="text-orange-500" aria-hidden="true">*</span>}
      </label>
      {children}
      {error && (
        <p className="text-xs text-red-600 flex items-center gap-1.5 pt-0.5" role="alert">
          <svg className="w-3.5 h-3.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          {error}
        </p>
      )}
    </div>
  );
}

const inputClass =
  "w-full px-4 py-3 bg-white border border-neutral-200 rounded-xl text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all duration-200 hover:border-neutral-300";

export default function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const [form, setForm] = useState<FormData>(initialForm);
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [formState, setFormState] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {};
    if (!form.fullName.trim()) newErrors.fullName = "Full name is required.";
    if (!form.businessName.trim()) newErrors.businessName = "Business name is required.";
    if (!form.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!form.service) newErrors.service = "Please select a service of interest.";
    if (!form.description.trim()) newErrors.description = "Please describe your project briefly.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submitted || formState === "loading") return;
    if (!validate()) return;

    setFormState("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to process enquiry. Please connect directly on WhatsApp.");
      }

      setFormState("success");
      setSubmitted(true);
      setForm(initialForm);
    } catch (err: unknown) {
      setFormState("error");
      setErrorMessage(err instanceof Error ? err.message : "Unexpected error. Please reach out via WhatsApp.");
    }
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-neutral-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl mx-auto text-center mb-12 sm:mb-14"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-orange-600 mb-3 sm:mb-4">
            Get in Touch
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 tracking-tight leading-tight">
            Let&apos;s Build Something Smarter.
          </h2>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-neutral-600 leading-relaxed font-light">
            Tell us a little about your business and what you&apos;d like to automate.
          </p>
        </motion.div>

        {/* Contact Enquiry Form */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl sm:max-w-3xl mx-auto"
        >
            {formState === "success" ? (
              <div className="flex flex-col items-center justify-center text-center py-16 px-6 gap-5 bg-white rounded-3xl border border-neutral-200/80 shadow-sm">
                <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center">
                  <svg className="w-8 h-8 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-neutral-900">Enquiry Received!</h3>
                  <p className="text-sm text-neutral-600 mt-2 max-w-md leading-relaxed">
                    Thank you for reaching out to UNOS AUTOMATIONS. We will review your project details and get back to you promptly.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 mt-3">
                  <a
                    href={siteConfig.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#25D366] text-white text-sm font-semibold rounded-full hover:bg-[#20ba59] transition-all"
                  >
                    <WhatsAppIcon className="w-4 h-4" />
                    <span>Follow Up on WhatsApp</span>
                  </a>
                  <button
                    onClick={() => {
                      setFormState("idle");
                      setSubmitted(false);
                    }}
                    className="px-6 py-3 border border-neutral-200 text-neutral-700 text-sm font-medium rounded-full hover:bg-neutral-50 transition-colors"
                  >
                    Send another enquiry
                  </button>
                </div>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                className="bg-white rounded-3xl border border-neutral-200/80 shadow-sm p-8 space-y-6"
                aria-label="Project enquiry form"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <FormField label="Full Name" required error={errors.fullName}>
                    <input
                      type="text"
                      name="fullName"
                      value={form.fullName}
                      onChange={handleChange}
                      autoComplete="name"
                      placeholder="Jane Doe"
                      className={inputClass}
                      aria-required="true"
                      aria-invalid={!!errors.fullName}
                    />
                  </FormField>
                  <FormField label="Business Name" required error={errors.businessName}>
                    <input
                      type="text"
                      name="businessName"
                      value={form.businessName}
                      onChange={handleChange}
                      autoComplete="organization"
                      placeholder="e.g. Apex Dental Care"
                      className={inputClass}
                      aria-required="true"
                      aria-invalid={!!errors.businessName}
                    />
                  </FormField>
                  <FormField label="Work Email" required error={errors.email}>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      autoComplete="email"
                      placeholder="jane@example.com"
                      className={inputClass}
                      aria-required="true"
                      aria-invalid={!!errors.email}
                    />
                  </FormField>
                  <FormField label="WhatsApp or Phone Number" error={errors.phone}>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      autoComplete="tel"
                      placeholder="+1 (555) 000-0000"
                      className={inputClass}
                    />
                  </FormField>
                </div>

                <FormField label="Service of Interest" required error={errors.service}>
                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className={inputClass}
                    aria-required="true"
                    aria-invalid={!!errors.service}
                  >
                    <option value="">Select a service…</option>
                    {services.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </FormField>

                <FormField label="Brief Project Description" required error={errors.description}>
                  <textarea
                    name="description"
                    value={form.description}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Describe your current bottleneck, what you'd like to automate, or features needed for your business…"
                    className={`${inputClass} resize-none`}
                    aria-required="true"
                    aria-invalid={!!errors.description}
                  />
                </FormField>

                <FormField label="Preferred Contact Time (Optional)" error={errors.preferredTime}>
                  <input
                    type="text"
                    name="preferredTime"
                    value={form.preferredTime}
                    onChange={handleChange}
                    placeholder="e.g. Weekdays morning, or anytime via WhatsApp"
                    className={inputClass}
                  />
                </FormField>

                {/* Error notice if offline */}
                {formState === "error" && (
                  <p className="text-xs text-red-600 text-center" role="alert">
                    {errorMessage}
                  </p>
                )}

                {/* Submit button + WhatsApp secondary button */}
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <button
                    type="submit"
                    disabled={formState === "loading"}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-7 py-4 bg-neutral-900 text-white text-sm font-semibold rounded-full hover:bg-neutral-800 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-neutral-900 shadow-md shadow-neutral-900/10"
                  >
                    {formState === "loading" ? (
                      <>
                        <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Sending Enquiry…
                      </>
                    ) : (
                      "Send Project Enquiry"
                    )}
                  </button>

                  <a
                    href={siteConfig.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-7 py-4 border border-neutral-300 text-neutral-800 text-sm font-semibold rounded-full hover:bg-neutral-50 hover:border-neutral-400 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400"
                  >
                    <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
                    <span>Chat on WhatsApp</span>
                  </a>
                </div>
              </form>
            )}
          </motion.div>
      </div>
    </section>
  );
}
