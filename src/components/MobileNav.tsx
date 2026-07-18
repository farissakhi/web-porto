"use client";

import { useState, useEffect } from "react";
import MobileBottomNav from "./MobileBottomNav";
import MobileMenuDrawer from "./MobileMenuDrawer";

export default function MobileNav() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Track active section similar to Navbar
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "experience", "contact"];
      for (const section of [...sections].reverse()) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 300) { // adjusted offset for mobile bottom nav
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    // Initial check
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="md:hidden">
      <MobileBottomNav 
        activeSection={activeSection} 
        onMenuClick={() => setIsDrawerOpen(true)} 
      />
      <MobileMenuDrawer 
        isOpen={isDrawerOpen} 
        onClose={() => setIsDrawerOpen(false)} 
        activeSection={activeSection}
      />
    </div>
  );
}
