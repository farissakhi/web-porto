"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiCalendar, FiCheckCircle, FiChevronDown } from "react-icons/fi";
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

/* ── Initials color palette for fallback avatars ── */
const AVATAR_COLORS = [
  "bg-blue-500/20 text-blue-400",
  "bg-purple-500/20 text-purple-400",
  "bg-emerald-500/20 text-emerald-400",
  "bg-amber-500/20 text-amber-400",
  "bg-rose-500/20 text-rose-400",
  "bg-cyan-500/20 text-cyan-400",
];

function getAvatarColor(name: string): string {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  return AVATAR_COLORS[Math.abs(hash) % AVATAR_COLORS.length];
}

function getInitials(name: string): string {
  return name
    .split(/[\s()]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

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

/* ── helper components ── */
function LogoBox({ logo, name }: { logo: string; name: string }) {
  const initials = getInitials(name);
  const colorClass = getAvatarColor(name);

  return (
    <div className="shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-white/[0.08] border border-border overflow-hidden">
      {logo ? (
        <Image
          src={logo}
          alt={name}
          width={48}
          height={48}
          className="w-full h-full object-cover bg-white scale-[1.5]"
        />
      ) : (
        <div
          className={`w-full h-full flex items-center justify-center text-sm font-bold ${colorClass}`}
        >
          {initials}
        </div>
      )}
    </div>
  );
}

/* ── Expandable description ── */
function ExpandableDescription({ text }: { text: string }) {
  const CHAR_LIMIT = 200;
  const isLong = text.length > CHAR_LIMIT;
  const [expanded, setExpanded] = useState(!isLong);

  if (!text) return null;

  return (
    <div className="mb-3">
      <AnimatePresence mode="wait">
        <motion.p
          key={expanded ? "full" : "short"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="text-xs text-muted-foreground leading-relaxed"
        >
          {expanded ? text : `${text.slice(0, CHAR_LIMIT)}...`}
        </motion.p>
      </AnimatePresence>
      {isLong && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="inline-flex items-center gap-1 mt-1.5 text-[11px] font-medium text-muted-foreground/70
                     hover:text-foreground transition-colors duration-200"
        >
          <motion.span
            animate={{ rotate: expanded ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <FiChevronDown size={12} />
          </motion.span>
          {expanded ? "Show less" : "Read more"}
        </button>
      )}
    </div>
  );
}

/* ── Timeline dot — active (Present) vs completed ── */
function TimelineDot({ isActive, size = "md" }: { isActive: boolean; size?: "sm" | "md" }) {
  const sizeClasses = size === "sm"
    ? "w-3 h-3"
    : "w-4 h-4";
  const innerSize = size === "sm"
    ? "w-1 h-1"
    : "w-1.5 h-1.5";

  if (isActive) {
    return (
      <motion.div
        variants={dotVariant}
        className={`relative z-10 flex items-center justify-center ${sizeClasses} mt-1.5 rounded-full`}
      >
        {/* Pulse ring for active */}
        <span className="absolute inset-[-3px] rounded-full bg-emerald-400/20 animate-ping" style={{ animationDuration: "2.5s" }} />
        <span className="absolute inset-[-2px] rounded-full bg-emerald-400/10" />
        <div className={`relative ${sizeClasses} rounded-full bg-emerald-500/30 border-2 border-emerald-400 flex items-center justify-center`}>
          <div className={`${innerSize} rounded-full bg-emerald-400`} />
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      variants={dotVariant}
      className={`relative z-10 flex items-center justify-center ${sizeClasses} mt-1.5 rounded-full bg-foreground/10 border-2 border-border`}
    >
      <div className={`${innerSize} rounded-full bg-muted-foreground/50`} />
    </motion.div>
  );
}

/* ── Date badge — active vs completed ── */
function DateBadge({ dateRange, isActive }: { dateRange: string; isActive: boolean }) {
  if (!dateRange) return null;

  return (
    <span
      className={`inline-flex items-center gap-1 px-2.5 py-0.5 text-[10px] font-medium rounded-full border whitespace-nowrap ${
        isActive
          ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
          : "bg-muted text-muted-foreground border-border"
      }`}
    >
      <FiCalendar size={10} />
      {dateRange}
    </span>
  );
}

/* ── Role details (used in both grouped and standalone) ── */
function RoleDetails({
  title,
  subtitle,
  dateRange,
  gpa,
  description,
  achievements,
  isGrouped = false,
  isActive = false,
}: {
  title: string;
  subtitle?: string;
  dateRange: string;
  gpa?: string;
  description: string;
  achievements: string[];
  isGrouped?: boolean;
  isActive?: boolean;
}) {
  return (
    <div className="flex-1 min-w-0">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1">
        <h4
          className={`font-semibold text-foreground leading-snug ${
            isGrouped ? "text-sm" : "text-base"
          }`}
        >
          {title}
        </h4>
        <DateBadge dateRange={dateRange} isActive={isActive} />
      </div>

      {subtitle && (
        <p className="text-xs text-muted-foreground mb-2">{subtitle}</p>
      )}

      {gpa && (
        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 mb-2 text-[10px] font-semibold rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
          GPA: {gpa}
        </span>
      )}

      <ExpandableDescription text={description} />

      {achievements.length > 0 && (
        <ul className="space-y-1.5">
          {achievements.map((item, i) => (
            <li
              key={i}
              className="flex items-start gap-2 text-xs text-muted-foreground"
            >
              <FiCheckCircle
                size={12}
                className="text-emerald-400/60 mt-0.5 shrink-0"
              />
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

/* ── single timeline entry (Education) ── */
function TimelineEntry({
  logo,
  title,
  subtitle,
  dateRange,
  gpa,
  description,
  achievements,
  isLast,
  isActive,
}: {
  logo: string;
  title: string;
  subtitle: string;
  dateRange: string;
  gpa?: string;
  description: string;
  achievements: string[];
  isLast: boolean;
  isActive: boolean;
}) {
  return (
    <motion.div variants={timelineItem} className="relative flex gap-4 sm:gap-6">
      <div className="relative flex flex-col items-center">
        <TimelineDot isActive={isActive} />
        {!isLast && <div className="flex-1 w-px bg-border" />}
      </div>

      <div className="flex-1 pb-10">
        <div className="group flex flex-col sm:flex-row sm:items-start gap-4 p-5 rounded-2xl bg-card border border-border hover:border-muted-foreground/20 transition-all duration-300">
          <LogoBox logo={logo} name={subtitle} />
          <RoleDetails
            title={title}
            subtitle={subtitle}
            dateRange={dateRange}
            gpa={gpa}
            description={description}
            achievements={achievements}
            isActive={isActive}
          />
        </div>
      </div>
    </motion.div>
  );
}

/* ── grouped timeline entry (Organization with multiple roles) ── */
function GroupedTimelineEntry({ org }: { org: Organization }) {
  return (
    <motion.div variants={timelineItem} className="relative pb-8">
      <div className="rounded-2xl bg-card border border-border hover:border-muted-foreground/20 transition-all duration-300 overflow-hidden">
        {/* Organization Header */}
        <div className="flex items-center gap-4 p-5 sm:p-6 pb-0 sm:pb-0">
          <LogoBox logo={org.logo} name={org.name} />
          <div>
            <h3 className="text-base sm:text-lg font-bold text-foreground leading-tight">
              {org.name}
            </h3>
          </div>
        </div>

        {/* Divider */}
        <div className="mx-5 sm:mx-6 mt-4 mb-0">
          <div className="h-px bg-border" />
        </div>

        {/* Nested Roles Timeline */}
        <div className="p-5 sm:p-6 pt-4 sm:pt-4 pl-10 sm:pl-12">
          {org.roles.map((role, idx) => {
            const isLastRole = idx === org.roles.length - 1;
            const isActive =
              role.endDate.toLowerCase() === "present";
            const dateRange =
              role.startDate || role.endDate
                ? `${role.startDate}${role.endDate ? ` — ${role.endDate}` : ""}`
                : "";

            return (
              <div key={idx} className="relative flex gap-4 sm:gap-5">
                {/* Nested spine */}
                <div className="relative flex flex-col items-center">
                  <TimelineDot isActive={isActive} size="sm" />
                  {!isLastRole && <div className="flex-1 w-px bg-border" />}
                </div>

                {/* Role Content */}
                <div className={`flex-1 ${!isLastRole ? "pb-8" : ""}`}>
                  <RoleDetails
                    title={role.role}
                    dateRange={dateRange}
                    description={role.description}
                    achievements={role.achievements}
                    isGrouped={true}
                    isActive={isActive}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}

/* ── main section ── */
export default function ExperienceSection() {
  const [activeTab, setActiveTab] = useState<Tab>("education");

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
                  type: "spring" as const,
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
          {activeTab === "education" ? (
            education.length > 0 ? (
              education.map((edu, idx) => {
                const dateRange =
                  edu.startDate || edu.endDate
                    ? `${edu.startDate}${edu.endDate ? ` — ${edu.endDate}` : ""}`
                    : "";
                const isActive =
                  edu.endDate.toLowerCase() === "present";
                return (
                  <TimelineEntry
                    key={edu.id}
                    logo={edu.logo}
                    title={edu.degree || "Degree"}
                    subtitle={edu.institution || "Institution"}
                    dateRange={dateRange}
                    gpa={edu.gpa}
                    description={edu.description}
                    achievements={edu.achievements}
                    isLast={idx === education.length - 1}
                    isActive={isActive}
                  />
                );
              })
            ) : (
              <p className="text-center text-sm text-muted-foreground py-12">
                No education entries yet.
              </p>
            )
          ) : organizations.length > 0 ? (
            organizations.map((org) => (
              <GroupedTimelineEntry key={org.id} org={org} />
            ))
          ) : (
            <p className="text-center text-sm text-muted-foreground py-12">
              No organizational entries yet.
            </p>
          )}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
