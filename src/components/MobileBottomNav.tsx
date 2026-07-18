"use client";

import { motion } from "framer-motion";
import { FiHome, FiBriefcase, FiAward, FiSend, FiMenu } from "react-icons/fi";

const navItems = [
  { id: "home", label: "Home", icon: FiHome },
  { id: "projects", label: "Projects", icon: FiBriefcase },
  { id: "experience", label: "Experience", icon: FiAward },
  { id: "contact", label: "Contact", icon: FiSend },
];

interface MobileBottomNavProps {
  activeSection: string;
  onMenuClick: () => void;
}

export default function MobileBottomNav({ activeSection, onMenuClick }: MobileBottomNavProps) {
  const handleNavClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div 
      className="fixed bottom-0 left-0 w-full z-50 bg-background/80 backdrop-blur-xl border-t border-border"
      style={{ paddingBottom: "max(0.5rem, env(safe-area-inset-bottom))" }}
    >
      <div className="flex items-center justify-around h-16 px-2 max-w-md mx-auto">
        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className="relative flex flex-col items-center justify-center w-14 h-full gap-1"
              aria-label={item.label}
            >
              <motion.div
                animate={{ 
                  scale: isActive ? 1.1 : 1,
                  color: isActive ? "hsl(var(--foreground))" : "hsl(var(--muted-foreground))"
                }}
                transition={{ duration: 0.2 }}
                className={`relative z-10 ${isActive ? "text-emerald-400" : ""}`}
              >
                <Icon size={22} />
              </motion.div>
              <span className={`text-[10px] font-medium transition-colors ${isActive ? "text-foreground" : "text-muted-foreground"}`}>
                {item.label}
              </span>
              
              {isActive && (
                <motion.div
                  layoutId="mobileNavActive"
                  className="absolute inset-0 bg-muted/50 rounded-xl -z-10"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </button>
          );
        })}
        
        {/* Menu Button */}
        <button
          onClick={onMenuClick}
          className="relative flex flex-col items-center justify-center w-14 h-full gap-1 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Menu"
        >
          <FiMenu size={22} />
          <span className="text-[10px] font-medium">Menu</span>
        </button>
      </div>
    </div>
  );
}
