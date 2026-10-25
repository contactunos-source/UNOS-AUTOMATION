"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/config";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ["home", "journey", "services", "projects", "about", "faq", "contact"];
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-white/95 backdrop-blur-md border-b border-neutral-200/80 shadow-sm"
            : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <nav className="flex items-center justify-between h-18 lg:h-20">
            {/* Logo + Wordmark */}
            <button
              onClick={() => handleNavClick("#home")}
              className="flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 rounded-lg group"
              aria-label="UNOS AUTOMATIONS — go to homepage"
            >
              <div className="relative h-9 w-auto flex items-center justify-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/logo.png"
                  alt="UNOS AUTOMATIONS logo"
                  className="h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <span className="text-base font-bold tracking-tight text-neutral-900 group-hover:text-neutral-700 transition-colors">
                UNOS AUTOMATIONS
              </span>
            </button>

            {/* Desktop Nav Links */}
            <ul className="hidden md:flex items-center gap-1" role="list">
              {siteConfig.navLinks.map((link) => {
                const isActive = activeSection === link.href.replace("#", "");
                return (
                  <li key={link.href}>
                    <button
                      onClick={() => handleNavClick(link.href)}
                      className={cn(
                        "px-3.5 py-2 text-sm font-medium rounded-lg transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500",
                        isActive
                          ? "text-orange-600 bg-orange-50/70"
                          : "text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100/70"
                      )}
                    >
                      {link.label}
                    </button>
                  </li>
                );
              })}
            </ul>

            {/* Mobile toggle */}
            <div className="flex items-center">
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="md:hidden p-2 rounded-lg text-neutral-700 hover:bg-neutral-100 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileOpen}
              >
                {mobileOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </nav>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-18 z-40 bg-white/98 backdrop-blur-xl border-b border-neutral-200 shadow-lg md:hidden"
            role="dialog"
            aria-label="Mobile navigation"
          >
            <div className="px-6 py-5 space-y-2">
              {siteConfig.navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="w-full text-left px-4 py-3 text-base font-medium text-neutral-800 hover:text-orange-600 hover:bg-orange-50/60 rounded-xl transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
