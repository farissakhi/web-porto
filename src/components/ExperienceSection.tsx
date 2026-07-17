"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FiAward, FiCalendar, FiCheckCircle } from "react-icons/fi";
import Image from "next/image";
import SectionWrapper, { SectionHeading } from "./SectionWrapper";
import {
  education,
  organizations,
  type Education,
  type Organization,
} from "@/data/experience";

type Tab = "education" | "organization";

const tabs: { label: string; value: Tab }[] = [
  { label: "Academic / Education", value: "education" },
  { label: "Organizational", value: "organization" },
];

/* ── animation variants ── */
const timelineContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
};

const timelineItem = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.45, ease: "easeOut" as const },
  },
};

const dotVariant = {
  hidden: { scale: 0 },
  visible: {
    scale: 1,
    transition: { type: "spring" as const, stiffness: 500, damping: 25 },
  },
};

/* ── shared timeline entry ── */
function TimelineEntry({
  logo,
  title,
  subtitle,
  dateRange,
  gpa,
  description,
  achievements,
  isLast,
}: {
  logo: string;
  title: string;
  subtitle: string;
  dateRange: string;
  gpa?: string;
  description: string;
  achievements: string[];
  isLast: boolean;
}) {
  return (
    <motion.div variants={timelineItem} className="relative flex gap-4 sm:gap-6">
      {/* Timeline spine: dot + vertical line */}
      <div className="relative flex flex-col items-center">
        {/* Dot */}
        <motion.div
          variants={dotVariant}
          className="relative z-10 flex items-center justify-center w-4 h-4 mt-1.5 rounded-full bg-foreground/20 border-2 border-foreground/40"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-foreground" />
        </motion.div>

        {/* Vertical line */}
        {!isLast && (
          <div className="flex-1 w-px bg-border" />
        )}
      </div>

      {/* Content card */}
      <div className="flex-1 pb-10">
        <div className="group flex flex-col sm:flex-row sm:items-start gap-4 p-5 rounded-2xl bg-card border border-border hover:border-muted-foreground/20 transition-all duration-300">
          {/* Logo */}
          <div className="shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-white/[0.08] border border-border overflow-hidden">
            {logo ? (
              <Image
                src={logo}
                alt={subtitle}
                width={40}
                height={40}
                className="w-8 h-8 object-contain"
              />
            ) : (
              <FiAward size={20} className="text-muted-foreground" />
            )}
          </div>

          {/* Text block */}
          <div className="flex-1 min-w-0">
            {/* Top row: title + date */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1">
              <h4 className="text-sm font-semibold text-foreground leading-snug">
                {title || "Untitled Role"}
              </h4>
              {dateRange && (
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 text-[10px] font-medium rounded-full bg-muted text-muted-foreground border border-border whitespace-nowrap">
                  <FiCalendar size={10} />
                  {dateRange}
                </span>
              )}
            </div>

            {/* Institution / org name */}
            <p className="text-xs text-muted-foreground mb-2">
              {subtitle || "Institution / Organization"}
            </p>

            {/* Badges row: GPA */}
            {gpa && (
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 mb-2 text-[10px] font-semibold rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                GPA: {gpa}
              </span>
            )}

            {/* Description */}
            {description && (
              <p className="text-xs text-muted-foreground leading-relaxed mb-3 line-clamp-3">
                {description}
              </p>
            )}

            {/* Achievements */}
            {achievements.length > 0 && (
              <ul className="space-y-1.5">
                {achievements.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-xs text-muted-foreground"
                  >
                    <FiCheckCircle
                      size={12}
                      className="text-muted-foreground/60 mt-0.5 shrink-0"
                    />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ── main section ── */
export default function ExperienceSection() {
  const [activeTab, setActiveTab] = useState<Tab>("education");

  const eduEntries = education.map((e) => ({
    key: e.id,
    logo: e.logo,
    title: e.degree,
    subtitle: e.institution,
    dateRange:
      e.startDate || e.endDate
        ? `${e.startDate}${e.endDate ? ` — ${e.endDate}` : ""}`
        : "",
    gpa: e.gpa,
    description: e.description,
    achievements: e.achievements,
  }));

  const orgEntries = organizations.map((o) => ({
    key: o.id,
    logo: o.logo,
    title: o.role,
    subtitle: o.name,
    dateRange:
      o.startDate || o.endDate
        ? `${o.startDate}${o.endDate ? ` — ${o.endDate}` : ""}`
        : "",
    gpa: undefined,
    description: o.description,
    achievements: o.achievements,
  }));

  const entries = activeTab === "education" ? eduEntries : orgEntries;

  return (
    <SectionWrapper id="experience">
      <SectionHeading
        title="Experience"
        subtitle="My academic journey and organizational involvement"
      />

      {/* Tabs */}
      <div className="flex items-center justify-center gap-2 mb-12">
        {tabs.map((tab) => (
          <button
            key={tab.value}
            onClick={() => setActiveTab(tab.value)}
            className={`relative px-5 py-1.5 text-xs font-medium rounded-full transition-all duration-300
              ${
                activeTab === tab.value
                  ? "text-background"
                  : "text-muted-foreground hover:text-foreground border border-border hover:border-muted-foreground/30"
              }`}
          >
            {activeTab === tab.value && (
              <motion.div
                layoutId="activeExpTab"
                className="absolute inset-0 bg-foreground rounded-full -z-10"
                transition={{
                  type: "spring",
                  stiffness: 380,
                  damping: 30,
                }}
              />
            )}
            {tab.label}
          </button>
        ))}
      </div>

      {/* Timeline */}
      <div className="max-w-2xl mx-auto">
        <motion.div
          key={activeTab}
          variants={timelineContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
        >
          {entries.length > 0 ? (
            entries.map((entry, idx) => (
              <TimelineEntry
                key={entry.key}
                logo={entry.logo}
                title={entry.title}
                subtitle={entry.subtitle}
                dateRange={entry.dateRange}
                gpa={entry.gpa}
                description={entry.description}
                achievements={entry.achievements}
                isLast={idx === entries.length - 1}
              />
            ))
          ) : (
            <p className="text-center text-sm text-muted-foreground py-12">
              No entries yet — add your experience in{" "}
              <code className="text-xs bg-muted px-1.5 py-0.5 rounded">
                src/data/experience.ts
              </code>
            </p>
          )}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
