"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiDownload, FiSun, FiMoon } from "react-icons/fi";
import { useTheme } from "./ThemeProvider";
import { profile } from "@/data/profile";
import SocialIcons from "./SocialIcons";

interface MobileMenuDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  activeSection: string;
}

export default function MobileMenuDrawer({ isOpen, onClose, activeSection }: MobileMenuDrawerProps) {
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const handleNavClick = (href: string) => {
    onClose();
    setTimeout(() => {
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }, 300); // Wait for drawer to close before scrolling
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[60] flex justify-end">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="relative w-[80%] max-w-sm h-full bg-card border-l border-border flex flex-col"
            style={{ paddingBottom: "max(1rem, env(safe-area-inset-bottom))" }}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-5 border-b border-border">
              <span className="font-bold">{profile.name}</span>
              <button
                onClick={onClose}
                className="p-2 -mr-2 rounded-full hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Close menu"
              >
                <FiX size={20} />
              </button>
            </div>

            {/* Content (Scrollable) */}
            <div className="flex-1 overflow-y-auto p-5 pb-20">
              <div className="flex flex-col gap-2 mb-8">
                <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2 px-2">Navigation</span>
                {profile.navLinks.map((link) => {
                  const sectionId = link.href.replace("#", "");
                  const isActive = activeSection === sectionId;
                  return (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(link.href);
                      }}
                      className={`px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200
                        ${isActive 
                          ? "bg-muted text-foreground" 
                          : "text-muted-foreground hover:text-foreground hover:bg-muted/50"}`}
                    >
                      {link.label}
                    </a>
                  )
                })}
              </div>

              <div className="flex flex-col gap-4 px-2">
                <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Options</span>
                
                <button
                  onClick={toggleTheme}
                  className="flex items-center justify-between py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <span>Theme</span>
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-muted border border-border">
                    {theme === "dark" ? <FiMoon size={14} /> : <FiSun size={14} />}
                    <span className="text-xs">{theme === "dark" ? "Dark" : "Light"}</span>
                  </div>
                </button>

                <a
                  href={profile.cvDrivePreview || profile.cvFile}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <FiDownload size={16} />
                  <span>Download CV</span>
                </a>
              </div>
            </div>

            {/* Footer */}
            <div className="p-5 border-t border-border mt-auto shrink-0">
              <p className="text-xs text-muted-foreground mb-4 px-2">Connect with me</p>
              <div className="px-2">
                <SocialIcons />
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
