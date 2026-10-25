// Central configuration for UNOS AUTOMATIONS

export const siteConfig = {
  name: "UNOS AUTOMATIONS",
  tagline: "AI Voice Agents & Business Automation",
  description:
    "AI-powered voice agents, intelligent automations, and modern websites that help businesses capture more opportunities and eliminate repetitive work.",

  // Contact Email
  email: "contactunos@gmail.com",

  // WhatsApp Configuration
  // Country Code: 91 (India) + Mobile: 9182078320 -> 919182078320
  whatsappNumber: "919182078320",
  whatsappDefaultMessage: "Hi UNOS AUTOMATIONS, I'm interested in your AI automation services.",
  
  get whatsappUrl(): string {
    return `https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent(this.whatsappDefaultMessage)}`;
  },

  // Navigation links
  navLinks: [
    { label: "Home", href: "#home" },
    { label: "How It Works", href: "#journey" },
    { label: "Services", href: "#services" },
    { label: "Demos", href: "#projects" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ],
};

export type SiteConfig = typeof siteConfig;
