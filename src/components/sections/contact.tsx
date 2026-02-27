"use client";

import { contactData, siteConfig } from "@/data/portfolio";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, MessageSquare } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export function Contact() {
  return (
    <section id="contact" className="relative px-6 py-16 lg:px-12">
      {/* Line numbers */}
      <div className="absolute left-0 top-0 hidden h-full select-none flex-col border-r border-[#30363d] bg-[#010409] px-3 py-16 text-right text-sm text-[#484f58] lg:flex">
        {Array.from({ length: 35 }).map((_, i) => (
          <div key={i}>{i + 158}</div>
        ))}
      </div>

      <div className="mx-auto max-w-3xl lg:ml-20">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <div className="text-sm text-[#8b949e]">
            <span className="syntax-comment">{"// contact.md"}</span>
          </div>
          <h2 className="mt-4 text-2xl font-bold text-[#e6edf3] lg:text-3xl">
            {contactData.headline}
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-[#7d8590] lg:text-base">
            {contactData.description}
          </p>
          <p className="mt-2 text-sm text-[#4ade80]">
            {contactData.cta}
          </p>
        </motion.div>

        {/* Contact cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-4 sm:grid-cols-3"
        >
          {/* Email */}
          <motion.a
            variants={itemVariants}
            href={`mailto:${siteConfig.email}`}
            className="group flex flex-col gap-4 rounded-lg border border-[#30363d] bg-[#161b22] p-5 transition-all hover:border-[#4ade80]/50 hover:bg-[#1c2128]"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-md bg-[#238636]/15">
              <Mail className="h-5 w-5 text-[#4ade80]" />
            </div>
            <div>
              <p className="text-sm font-medium text-[#e6edf3]">Email me</p>
              <p className="mt-1 text-xs text-[#7d8590] break-all">{siteConfig.email}</p>
            </div>
            <span className="mt-auto text-xs text-[#484f58] transition-colors group-hover:text-[#4ade80]">
              Preferred method
            </span>
          </motion.a>

          {/* GitHub */}
          <motion.a
            variants={itemVariants}
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col gap-4 rounded-lg border border-[#30363d] bg-[#161b22] p-5 transition-all hover:border-[#a5d6ff]/50 hover:bg-[#1c2128]"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-md bg-[#a5d6ff]/15">
              <Github className="h-5 w-5 text-[#a5d6ff]" />
            </div>
            <div>
              <p className="text-sm font-medium text-[#e6edf3]">GitHub</p>
              <p className="mt-1 text-xs text-[#7d8590]">Check out my work</p>
            </div>
            <span className="mt-auto text-xs text-[#484f58] transition-colors group-hover:text-[#a5d6ff]">
              @behz4dh
            </span>
          </motion.a>

          {/* LinkedIn */}
          <motion.a
            variants={itemVariants}
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col gap-4 rounded-lg border border-[#30363d] bg-[#161b22] p-5 transition-all hover:border-[#d2a8ff]/50 hover:bg-[#1c2128]"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-md bg-[#d2a8ff]/15">
              <Linkedin className="h-5 w-5 text-[#d2a8ff]" />
            </div>
            <div>
              <p className="text-sm font-medium text-[#e6edf3]">LinkedIn</p>
              <p className="mt-1 text-xs text-[#7d8590]">Let&apos;s connect</p>
            </div>
            <span className="mt-auto text-xs text-[#484f58] transition-colors group-hover:text-[#d2a8ff]">
              Professional profile
            </span>
          </motion.a>
        </motion.div>

        {/* Friendly sign-off */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-10 flex items-start gap-3 rounded-lg border border-[#30363d] bg-[#0d1117] p-5"
        >
          <MessageSquare className="mt-0.5 h-4 w-4 shrink-0 text-[#4ade80]" />
          <div className="space-y-2 text-sm text-[#7d8590]">
            <p>
              I usually respond within a day. If you&apos;re reaching out about a role, feel free to
              include details about the team and what you&apos;re building — it helps me give a
              thoughtful reply.
            </p>
            <p className="text-[#484f58]">
              Based in Huddersfield, UK. Open to remote and hybrid opportunities.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
