"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiSun, FiMoon, FiMenu, FiX, FiDownload } from "react-icons/fi";
import { useTheme } from "./ThemeProvider";
import { profile } from "@/data/profile";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = profile.navLinks.map((link) =>
        link.href.replace("#", "")
      );
      for (const section of [...sections].reverse()) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Floating Pill Navbar */}
      <motion.header
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" as const, delay: 0.2 }}
        className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-4xl"
      >
        <nav
          className={`flex items-center justify-between px-4 sm:px-5 h-12 sm:h-14 rounded-full transition-all duration-500 ${
            scrolled
              ? "glass shadow-[0_0_30px_rgba(0,0,0,0.3)]"
              : "bg-card/80 backdrop-blur-xl border border-border"
          }`}
        >
          {/* Logo / Name */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#home");
            }}
            className="text-sm font-bold tracking-tight hover:opacity-70 transition-opacity shrink-0"
          >
            {profile.name}
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-0.5">
            {profile.navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={`relative px-3 py-1.5 text-xs font-medium rounded-full transition-all duration-300
                  ${
                    activeSection === link.href.replace("#", "")
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
              >
                {link.label}
                {activeSection === link.href.replace("#", "") && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute inset-0 bg-muted border border-border rounded-full -z-10"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  />
                )}
              </a>
            ))}
          </div>

          {/* Right side: Resume + Theme toggle + Hire Me */}
          <div className="hidden md:flex items-center gap-2">
            <a
              href={profile.cvFile}
              download
              className="flex items-center gap-1 px-2.5 py-1 text-xs text-muted-foreground hover:text-foreground
                         rounded-full border border-border hover:border-muted-foreground/40 transition-all duration-300"
            >
              <FiDownload size={12} />
              Resume
            </a>

            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="flex items-center justify-center w-7 h-7 rounded-full border border-border
                         hover:border-muted-foreground/40 hover:bg-muted transition-all duration-300"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={theme}
                  initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
                  animate={{ rotate: 0, opacity: 1, scale: 1 }}
                  exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.2 }}
                >
                  {theme === "dark" ? (
                    <FiSun size={13} className="text-muted-foreground" />
                  ) : (
                    <FiMoon size={13} className="text-muted-foreground" />
                  )}
                </motion.div>
              </AnimatePresence>
            </button>

            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#contact");
              }}
              className="px-4 py-1.5 text-xs font-semibold rounded-full
                         bg-foreground text-background
                         hover:opacity-90 hover:scale-105
                         transition-all duration-300"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="flex items-center justify-center w-8 h-8 rounded-full border border-border transition-all"
            >
              {theme === "dark" ? <FiSun size={14} /> : <FiMoon size={14} />}
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              className="flex items-center justify-center w-8 h-8 rounded-full border border-border transition-all"
            >
              {mobileOpen ? <FiX size={16} /> : <FiMenu size={16} />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div
              className="absolute inset-0 bg-background/80 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="absolute top-0 right-0 w-72 h-full bg-card border-l border-border p-6 pt-20"
            >
              <div className="flex flex-col gap-2">
                {profile.navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className={`px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300
                      ${
                        activeSection === link.href.replace("#", "")
                          ? "bg-muted text-foreground"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted"
                      }`}
                  >
                    {link.label}
                  </a>
                ))}

                <hr className="border-border my-3" />

                <a
                  href={profile.cvFile}
                  download
                  className="flex items-center gap-2 px-4 py-3 rounded-xl text-sm text-muted-foreground hover:text-foreground transition-all"
                >
                  <FiDownload size={14} />
                  Download Resume
                </a>

                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick("#contact");
                  }}
                  className="mt-2 px-5 py-3 text-center text-sm font-semibold rounded-full
                             bg-foreground text-background hover:opacity-90 transition-all"
                >
                  Hire Me
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
