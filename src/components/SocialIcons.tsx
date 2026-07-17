"use client";

import { FiGithub, FiInstagram, FiLinkedin, FiMail } from "react-icons/fi";
import { profile } from "@/data/profile";

interface SocialIconsProps {
  size?: number;
  className?: string;
  showEmail?: boolean;
}

const socialLinks = [
  {
    icon: FiGithub,
    href: profile.socials.github,
    label: "GitHub",
  },
  {
    icon: FiLinkedin,
    href: profile.socials.linkedin,
    label: "LinkedIn",
  },
  {
    icon: FiInstagram,
    href: profile.socials.instagram,
    label: "Instagram",
  },
];

export default function SocialIcons({
  size = 18,
  className = "",
  showEmail = false,
}: SocialIconsProps) {
  const links = showEmail
    ? [
        ...socialLinks,
        {
          icon: FiMail,
          href: `mailto:${profile.email}`,
          label: "Email",
        },
      ]
    : socialLinks;

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {links.map((social) => (
        <a
          key={social.label}
          href={social.href}
          target={social.label === "Email" ? "_self" : "_blank"}
          rel="noopener noreferrer"
          aria-label={social.label}
          className="group flex items-center justify-center w-9 h-9 rounded-full
                     border border-border bg-card
                     transition-all duration-300
                     hover:bg-card-hover hover:border-muted-foreground/30 hover:scale-110"
        >
          <social.icon
            size={size}
            className="text-muted-foreground transition-colors duration-300 group-hover:text-foreground"
          />
        </a>
      ))}
    </div>
  );
}
