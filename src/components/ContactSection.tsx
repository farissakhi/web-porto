"use client";

import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiSend, FiMail, FiMapPin, FiCheck } from "react-icons/fi";
import SocialIcons from "./SocialIcons";
import SectionWrapper, { SectionHeading } from "./SectionWrapper";
import { profile } from "@/data/profile";

const contactInfoVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const contactInfoItem = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: "easeOut" as const },
  },
};

export default function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // TODO: Integrasi dengan form service (Formspree, EmailJS, dll.)
    // Contoh Formspree:
    //   fetch("https://formspree.io/f/YOUR_FORM_ID", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify(formState),
    //   });
    //
    // Atau gunakan mailto sebagai fallback:
    // window.location.href = `mailto:${profile.email}?subject=Portfolio Contact from ${formState.name}&body=${formState.message}`;

    console.log("Form submitted:", formState);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormState({ name: "", email: "", message: "" });
  };

  return (
    <SectionWrapper id="contact">
      <SectionHeading
        title="Get in Touch"
        subtitle="Have a project in mind? Let's work together to make it happen"
      />

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
        {/* Left: Contact Info */}
        <motion.div
          variants={contactInfoVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="lg:col-span-2 space-y-8"
        >
          <motion.div variants={contactInfoItem}>
            <h3 className="text-xl font-semibold mb-4">
              Let&apos;s build something amazing together
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              I&apos;m always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision. Feel free to reach out!
            </p>
          </motion.div>

          {/* Contact details */}
          <div className="space-y-3">
            <motion.a
              variants={contactInfoItem}
              href={`mailto:${profile.email}`}
              whileHover={{ scale: 1.02, y: -2 }}
              transition={{ duration: 0.2 }}
              className="group flex items-center gap-4 p-4 rounded-2xl bg-card border border-border
                         hover:border-muted-foreground/25 transition-all duration-300"
            >
              <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-muted">
                <FiMail size={18} className="text-muted-foreground" />
              </div>
              <div>
                <p className="text-[11px] text-muted-foreground mb-0.5">Email</p>
                <p className="text-sm font-medium group-hover:text-foreground transition-colors">
                  {profile.email}
                </p>
              </div>
            </motion.a>

            <motion.div
              variants={contactInfoItem}
              className="flex items-center gap-4 p-4 rounded-2xl bg-card border border-border"
            >
              <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-muted">
                <FiMapPin size={18} className="text-muted-foreground" />
              </div>
              <div>
                <p className="text-[11px] text-muted-foreground mb-0.5">Location</p>
                <p className="text-sm font-medium">{profile.location}</p>
              </div>
            </motion.div>
          </div>

          {/* Social Icons */}
          <motion.div variants={contactInfoItem}>
            <p className="text-xs text-muted-foreground mb-3">
              Follow me on social media
            </p>
            <SocialIcons />
          </motion.div>
        </motion.div>

        {/* Right: Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="lg:col-span-3 space-y-4 p-6 md:p-8 rounded-2xl bg-card border border-border"
        >
          <div>
            <label
              htmlFor="contact-name"
              className="block text-xs font-medium text-muted-foreground mb-2"
            >
              Your Name
            </label>
            <input
              id="contact-name"
              type="text"
              required
              value={formState.name}
              onChange={(e) =>
                setFormState({ ...formState, name: e.target.value })
              }
              placeholder="John Doe"
              className="w-full px-4 py-2.5 rounded-xl bg-background border border-border text-sm text-foreground
                         placeholder:text-muted-foreground/40
                         focus:outline-none focus:border-muted-foreground/40 focus:ring-1 focus:ring-muted-foreground/20
                         transition-all duration-300"
            />
          </div>

          <div>
            <label
              htmlFor="contact-email"
              className="block text-xs font-medium text-muted-foreground mb-2"
            >
              Your Email
            </label>
            <input
              id="contact-email"
              type="email"
              required
              value={formState.email}
              onChange={(e) =>
                setFormState({ ...formState, email: e.target.value })
              }
              placeholder="john@example.com"
              className="w-full px-4 py-2.5 rounded-xl bg-background border border-border text-sm text-foreground
                         placeholder:text-muted-foreground/40
                         focus:outline-none focus:border-muted-foreground/40 focus:ring-1 focus:ring-muted-foreground/20
                         transition-all duration-300"
            />
          </div>

          <div>
            <label
              htmlFor="contact-message"
              className="block text-xs font-medium text-muted-foreground mb-2"
            >
              Message
            </label>
            <textarea
              id="contact-message"
              required
              rows={5}
              value={formState.message}
              onChange={(e) =>
                setFormState({ ...formState, message: e.target.value })
              }
              placeholder="Tell me about your project..."
              className="w-full px-4 py-2.5 rounded-xl bg-background border border-border text-sm text-foreground
                         placeholder:text-muted-foreground/40 resize-none
                         focus:outline-none focus:border-muted-foreground/40 focus:ring-1 focus:ring-muted-foreground/20
                         transition-all duration-300"
            />
          </div>

          <motion.button
            type="submit"
            disabled={submitted}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="group w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full
                       font-semibold text-sm
                       bg-foreground text-background
                       hover:opacity-90
                       disabled:opacity-70 disabled:cursor-not-allowed
                       transition-all duration-300"
          >
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.span
                  key="sent"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="inline-flex items-center gap-2"
                >
                  <FiCheck size={16} />
                  Message Sent!
                </motion.span>
              ) : (
                <motion.span
                  key="send"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="inline-flex items-center gap-2"
                >
                  <FiSend
                    size={16}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                  Send Message
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        </motion.form>
      </div>

      {/* Footer */}
      <footer className="mt-20 pt-8 border-t border-border text-center">
        <p className="text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()}{" "}
          <span className="font-medium text-foreground">
            {profile.name}
          </span>
          . All rights reserved.
        </p>
      </footer>
    </SectionWrapper>
  );
}
