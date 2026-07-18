"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";

const CURSOR_SIZE = 10;
const INTERACTIVE_SELECTOR =
  "a, button, [role='button'], input, textarea, select, .cursor-pointer";

export default function CustomCursor() {
  const prefersReduced = useReducedMotion();
  const [enabled, setEnabled] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springX = useSpring(cursorX, { damping: 28, stiffness: 350, mass: 0.5 });
  const springY = useSpring(cursorY, { damping: 28, stiffness: 350, mass: 0.5 });

  useEffect(() => {
    if (prefersReduced) {
      setEnabled(false);
      return;
    }
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    setEnabled(mq.matches);
    const handleChange = (e: MediaQueryListEvent) => setEnabled(e.matches);
    mq.addEventListener("change", handleChange);
    return () => mq.removeEventListener("change", handleChange);
  }, [prefersReduced]);

  useEffect(() => {
    if (!enabled) return;

    document.body.classList.add("custom-cursor-active");

    let frame: number | null = null;
    let lastX = 0;
    let lastY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      lastX = e.clientX - CURSOR_SIZE / 2;
      lastY = e.clientY - CURSOR_SIZE / 2;
      if (frame === null) {
        frame = requestAnimationFrame(() => {
          cursorX.set(lastX);
          cursorY.set(lastY);
          frame = null;
        });
      }
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      setIsHovering(!!target.closest(INTERACTIVE_SELECTOR));
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseover", handleMouseOver);

    return () => {
      document.body.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      if (frame !== null) cancelAnimationFrame(frame);
    };
  }, [enabled, cursorX, cursorY]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[100] rounded-full bg-white mix-blend-difference"
      style={{
        width: CURSOR_SIZE,
        height: CURSOR_SIZE,
        x: springX,
        y: springY,
      }}
      animate={{ scale: isHovering ? 2.2 : 1 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    />
  );
}
