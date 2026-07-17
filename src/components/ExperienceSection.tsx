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
  type OrgRole,
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

/* ── helper components ── */
function LogoBox({ logo, alt }: { logo: string; alt: string }) {
  return (
    <div className="shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-white/[0.08] border border-border overflow-hidden">
      {logo ? (
        <Image
          src={logo}
          alt={alt}
          width={40}
          height={40}
          className="w-8 h-8 object-contain"
        />
      ) : (
        <FiAward size={20} className="text-muted-foreground" />
      )}
    </div>
  );
}

function RoleDetails({
  title,
  subtitle,
  dateRange,
  gpa,
  description,
  achievements,
  isGrouped = false,
}: {
  title: string;
  subtitle?: string;
  dateRange: string;
  gpa?: string;
  description: string;
  achievements: string[];
  isGrouped?: boolean;
}) {
  return (
    <div className="flex-1 min-w-0">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1">
        <h4 className={`font-semibold text-foreground leading-snug ${isGrouped ? "text-sm" : "text-base"}`}>
          {title}
        </h4>
        {dateRange && (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 text-[10px] font-medium rounded-full bg-muted text-muted-foreground border border-border whitespace-nowrap">
            <FiCalendar size={10} />
            {dateRange}
          </span>
        )}
      </div>

      {subtitle && (
        <p className="text-xs text-muted-foreground mb-2">{subtitle}</p>
      )}

      {gpa && (
        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 mb-2 text-[10px] font-semibold rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
          GPA: {gpa}
        </span>
      )}

      {description && (
        <p className="text-xs text-muted-foreground leading-relaxed mb-3 line-clamp-3">
          {description}
        </p>
      )}

      {achievements.length > 0 && (
        <ul className="space-y-1.5 mt-2">
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
      <div className="relative flex flex-col items-center">
        <motion.div
          variants={dotVariant}
          className="relative z-10 flex items-center justify-center w-4 h-4 mt-1.5 rounded-full bg-foreground/20 border-2 border-foreground/40"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-foreground" />
        </motion.div>
        {!isLast && <div className="flex-1 w-px bg-border" />}
      </div>

      <div className="flex-1 pb-10">
        <div className="group flex flex-col sm:flex-row sm:items-start gap-4 p-5 rounded-2xl bg-card border border-border hover:border-muted-foreground/20 transition-all duration-300">
          <LogoBox logo={logo} alt={subtitle} />
          <RoleDetails
            title={title}
            subtitle={subtitle}
            dateRange={dateRange}
            gpa={gpa}
            description={description}
            achievements={achievements}
          />
        </div>
      </div>
    </motion.div>
  );
}

/* ── grouped timeline entry (Organization with multiple roles) ── */
function GroupedTimelineEntry({
  org,
  isLast,
}: {
  org: Organization;
  isLast: boolean;
}) {
  return (
    <motion.div variants={timelineItem} className="relative flex gap-4 sm:gap-6 pb-10">
      {/* Outer spine (connects entire organizations if needed, currently unused as we group inside) 
          For LinkedIn style, the organization has the logo on the left, and a spine connects the roles.
          We will place the logo at the top level, and the vertical line directly beneath it connecting the roles.
      */}
      <div className="flex-1">
        <div className="group flex flex-col gap-6 p-5 sm:p-6 rounded-2xl bg-card border border-border hover:border-muted-foreground/20 transition-all duration-300">
          
          {/* Organization Header */}
          <div className="flex items-center gap-4">
            <LogoBox logo={org.logo} alt={org.name} />
            <div>
              <h3 className="text-base sm:text-lg font-bold text-foreground leading-tight">
                {org.name}
              </h3>
            </div>
          </div>

          {/* Nested Roles Timeline */}
          <div className="pl-6 sm:pl-7">
            {org.roles.map((role, idx) => {
              const isLastRole = idx === org.roles.length - 1;
              const dateRange =
                role.startDate || role.endDate
                  ? `${role.startDate}${role.endDate ? ` — ${role.endDate}` : ""}`
                  : "";

              return (
                <div key={idx} className="relative flex gap-4 sm:gap-5">
                  {/* Nested spine */}
                  <div className="relative flex flex-col items-center">
                    <motion.div
                      variants={dotVariant}
                      className="relative z-10 flex items-center justify-center w-3 h-3 mt-1.5 rounded-full bg-muted-foreground/30 border-2 border-border"
                    >
                      <div className="w-1 h-1 rounded-full bg-muted-foreground" />
                    </motion.div>
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
                    />
                  </div>
                </div>
              );
            })}
          </div>
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
                  />
                );
              })
            ) : (
              <p className="text-center text-sm text-muted-foreground py-12">
                No education entries yet.
              </p>
            )
          ) : organizations.length > 0 ? (
            organizations.map((org, idx) => (
              <GroupedTimelineEntry
                key={org.id}
                org={org}
                isLast={idx === organizations.length - 1}
              />
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
