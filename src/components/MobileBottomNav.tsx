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
    <nav 
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 
        w-fit px-4 py-2.5 
        rounded-full 
        bg-slate-900/60 backdrop-blur-md 
        border border-slate-700/50
        shadow-[0_8px_32px_rgba(0,0,0,0.3)]
        flex gap-2 items-center"
      style={{
        marginBottom: `env(safe-area-inset-bottom)`
      }}
    >
      {navItems.map((item) => {
        const isActive = activeSection === item.id;
        const Icon = item.icon;
        return (
          <button
            key={item.id}
            onClick={() => handleNavClick(item.id)}
            aria-label={item.label}
            className={`
              p-2.5 rounded-full transition-all duration-300 active:scale-95
              ${isActive 
                ? 'bg-emerald-500/20 shadow-[0_0_15px_rgba(52,211,153,0.35)] text-emerald-400' 
                : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
              }
            `}
          >
            <Icon size={22} />
          </button>
        );
      })}
      
      {/* Separator */}
      <div className="w-[1px] h-6 bg-slate-700/50 mx-1" />

      {/* Menu Button */}
      <button
        onClick={onMenuClick}
        aria-label="Menu"
        className="p-2.5 rounded-full transition-all duration-300 active:scale-95 text-slate-400 hover:text-white hover:bg-slate-800/60"
      >
        <FiMenu size={22} />
      </button>
    </nav>
  );
}
