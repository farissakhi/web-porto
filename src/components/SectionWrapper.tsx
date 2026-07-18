"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionWrapperProps {
  id: string;
  children: ReactNode;
  className?: string;
}

export default function SectionWrapper({
  id,
  children,
  className = "",
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`relative scroll-mt-6 ${className}`}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" as const }}
        >
          {children}
        </motion.div>
      </div>
      <div className="section-divider" />
    </section>
  );
}

/* Section heading reusable component */
export function SectionHeading({
  title,
  subtitle,
  gradient = false,
}: {
  title: string;
  subtitle?: string;
  gradient?: boolean;
}) {
  return (
    <div className="mb-12 md:mb-16 text-center">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
        {gradient ? (
          <span className="bg-gradient-to-r from-slate-200 to-slate-300 bg-clip-text text-transparent">
            {title}
          </span>
        ) : (
          title
        )}
      </h2>
      {subtitle && (
        <p className="mt-4 text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
