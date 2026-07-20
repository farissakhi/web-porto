"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { FiSun, FiMoon, FiMenu, FiX, FiDownload } from "react-icons/fi";
import { useTheme } from "./ThemeProvider";
import { profile } from "@/data/profile";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isShrunk, setIsShrunk] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsAtTop(latest <= 50);
    const previous = scrollY.getPrevious() || 0;
    
    if (latest > 50) {
      if (latest > previous) {
        setIsShrunk(true); // scrolling down
      } else {
        setIsShrunk(false); // scrolling up
      }
    } else {
      setIsShrunk(false); // at top
    }
  });

  useEffect(() => {
    const handleScroll = () => {
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
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" as const, delay: 0.3 }}
        className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-4xl"
      >
        <motion.nav
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          animate={{
            padding: isShrunk && !isHovered && !mobileOpen ? "8px 16px" : "16px 28px",
            gap: isShrunk && !isHovered && !mobileOpen ? "12px" : "24px",
          }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
          className={`flex items-center justify-between rounded-full transition-colors duration-500 ${
            !isAtTop
              ? "glass shadow-[0_0_30px_rgba(0,0,0,0.4)] border-muted-foreground/10"
              : "bg-card/60 backdrop-blur-xl border border-border"
          }`}
        >
          {/* Logo / Name */}
          <motion.a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#home");
            }}
            animate={{
              fontSize: isShrunk && !isHovered && !mobileOpen ? "13px" : "15px",
            }}
            transition={{ duration: 0.35 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="font-bold tracking-tight hover:opacity-70 transition-opacity shrink-0"
          >
            {profile.name}
          </motion.a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1">
            {profile.navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={`relative font-medium rounded-full transition-all duration-300
                  ${isShrunk && !isHovered && !mobileOpen ? "px-2.5 py-1 text-[12px]" : "px-3.5 py-1.5 text-sm"}
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

          {/* Right side: Theme toggle + Hire Me */}
          <div className="hidden md:flex items-center gap-2">
            <motion.button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              animate={{
                width: isShrunk && !isHovered && !mobileOpen ? "24px" : "32px",
                height: isShrunk && !isHovered && !mobileOpen ? "24px" : "32px",
              }}
              className="flex items-center justify-center rounded-full border border-border
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
                    <FiSun size={isShrunk && !isHovered && !mobileOpen ? 12 : 14} className="text-muted-foreground" />
                  ) : (
                    <FiMoon size={isShrunk && !isHovered && !mobileOpen ? 12 : 14} className="text-muted-foreground" />
                  )}
                </motion.div>
              </AnimatePresence>
            </motion.button>

            <motion.a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#contact");
              }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              animate={{
                padding: isShrunk && !isHovered && !mobileOpen ? "4px 12px" : "6px 16px",
                fontSize: isShrunk && !isHovered && !mobileOpen ? "12px" : "14px",
              }}
              className="font-semibold rounded-full
                         bg-foreground text-background
                         hover:opacity-90 hover:shadow-[0_0_20px_rgba(52,211,153,0.35)]
                         transition-all duration-300"
            >
              Hire Me
            </motion.a>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center gap-2">
            <motion.button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              animate={{
                width: isShrunk && !isHovered && !mobileOpen ? "28px" : "32px",
                height: isShrunk && !isHovered && !mobileOpen ? "28px" : "32px",
              }}
              className="flex items-center justify-center rounded-full border border-border transition-all"
            >
              {theme === "dark" ? (
                <FiSun size={isShrunk && !isHovered && !mobileOpen ? 12 : 14} />
              ) : (
                <FiMoon size={isShrunk && !isHovered && !mobileOpen ? 12 : 14} />
              )}
            </motion.button>
            <motion.button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              animate={{
                width: isShrunk && !isHovered && !mobileOpen ? "28px" : "32px",
                height: isShrunk && !isHovered && !mobileOpen ? "28px" : "32px",
              }}
              className="flex items-center justify-center rounded-full border border-border transition-all"
            >
              {mobileOpen ? (
                <FiX size={isShrunk && !isHovered && !mobileOpen ? 14 : 16} />
              ) : (
                <FiMenu size={isShrunk && !isHovered && !mobileOpen ? 14 : 16} />
              )}
            </motion.button>
          </div>
        </motion.nav>
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
                {profile.navLinks.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.05 }}
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
                  </motion.a>
                ))}

                <hr className="border-border my-3" />

                <motion.a
                  href={profile.cvFile}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.35 }}
                  className="flex items-center gap-2 px-4 py-3 rounded-xl text-sm text-muted-foreground hover:text-foreground transition-all"
                >
                  <FiDownload size={14} />
                  Get My CV
                </motion.a>

                <motion.a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick("#contact");
                  }}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  whileTap={{ scale: 0.97 }}
                  className="mt-2 px-5 py-3 text-center text-sm font-semibold rounded-full
                             bg-foreground text-background hover:opacity-90 hover:shadow-[0_0_20px_rgba(52,211,153,0.35)] transition-all"
                >
                  Hire Me
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
