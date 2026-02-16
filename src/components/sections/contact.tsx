"use client";

import { contactData, siteConfig } from "@/data/portfolio";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Terminal } from "lucide-react";

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
        {/* Terminal Window */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="code-block overflow-hidden"
        >
          {/* Terminal Header */}
          <div className="code-block-header">
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-[#ff5f56]" />
              <div className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
              <div className="h-3 w-3 rounded-full bg-[#27c93f]" />
            </div>
            <div className="flex items-center gap-2">
              <Terminal className="h-4 w-4 text-[#7d8590]" />
              <span>contact.md — portfolio</span>
            </div>
            <div className="w-16" />
          </div>

          {/* Terminal Content */}
          <div className="p-6 lg:p-8">
            {/* Comment */}
            <div className="mb-6">
              <p className="syntax-comment text-lg">
                // {contactData.headline}
              </p>
              <p className="mt-2 text-[#7d8590]">
                # {contactData.description}
              </p>
            </div>

            {/* Command Prompt */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 font-mono">
                <span className="text-[#4ade80]">➜</span>
                <span className="text-[#a5d6ff]">portfolio</span>
                <span className="text-[#e6edf3]">git:(</span>
                <span className="text-[#ff7b72]">main</span>
                <span className="text-[#e6edf3]">)</span>
                <span className="animate-pulse">❯</span>
                <span className="text-[#e6edf3]">npm run contact</span>
              </div>

              {/* Output */}
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="ml-4 space-y-3 border-l-2 border-[#30363d] pl-4"
              >
                <p className="text-sm text-[#7d8590]">
                  <span className="text-[#4ade80]">✓</span> Loading contact information...
                </p>

                {/* Contact Links */}
                <div className="flex flex-col gap-3 pt-2 sm:flex-row">
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="group flex items-center gap-3 rounded-lg border border-[#30363d] bg-[#0d1117] p-4 transition-all hover:border-[#4ade80]/50 hover:bg-[#161b22]"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded bg-[#238636]/20">
                      <Mail className="h-5 w-5 text-[#4ade80]" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-[#e6edf3]">Email</p>
                      <p className="text-xs text-[#7d8590]">{siteConfig.email}</p>
                    </div>
                  </a>

                  <a
                    href={siteConfig.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 rounded-lg border border-[#30363d] bg-[#0d1117] p-4 transition-all hover:border-[#a5d6ff]/50 hover:bg-[#161b22]"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded bg-[#a5d6ff]/20">
                      <Github className="h-5 w-5 text-[#a5d6ff]" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-[#e6edf3]">GitHub</p>
                      <p className="text-xs text-[#7d8590]">View source code</p>
                    </div>
                  </a>

                  <a
                    href={siteConfig.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 rounded-lg border border-[#30363d] bg-[#0d1117] p-4 transition-all hover:border-[#d2a8ff]/50 hover:bg-[#161b22]"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded bg-[#d2a8ff]/20">
                      <Linkedin className="h-5 w-5 text-[#d2a8ff]" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-[#e6edf3]">LinkedIn</p>
                      <p className="text-xs text-[#7d8590]">Professional profile</p>
                    </div>
                  </a>
                </div>

                {/* Success Message */}
                <div className="pt-2">
                  <p className="text-sm text-[#4ade80]">
                    ✓ Contact modules loaded successfully!
                  </p>
                  <p className="text-sm text-[#7d8590]">
                    Ready to collaborate on your next project.
                  </p>
                </div>

                {/* Blinking cursor */}
                <div className="flex items-center gap-2 pt-4">
                  <span className="text-[#4ade80]">➜</span>
                  <span className="text-[#a5d6ff]">portfolio</span>
                  <span className="text-[#e6edf3]">git:(</span>
                  <span className="text-[#ff7b72]">main</span>
                  <span className="text-[#e6edf3]">)</span>
                  <span className="cursor-blink" />
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
