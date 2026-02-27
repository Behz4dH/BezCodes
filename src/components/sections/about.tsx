"use client";

import { aboutData } from "@/data/portfolio";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.5 }
  }
};

export function About() {
  return (
    <section id="about" className="relative px-6 py-16 lg:px-12">
      {/* Line numbers */}
      <div className="absolute left-0 top-0 hidden h-full select-none flex-col border-r border-[#30363d] bg-[#010409] px-3 py-16 text-right text-sm text-[#484f58] lg:flex">
        {Array.from({ length: 30 }).map((_, i) => (
          <div key={i}>{i + 22}</div>
        ))}
      </div>

      <div className="mx-auto max-w-4xl lg:ml-20">
        {/* Function Definition */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="flex items-center gap-2 text-sm text-[#8b949e]">
            <span className="syntax-comment">// about.md</span>
          </div>
          <h2 className="mt-4 text-2xl font-bold lg:text-3xl">
            <span className="syntax-keyword">async function</span>{" "}
            <span className="syntax-function">getAboutMe</span>
            <span className="text-[#e6edf3]">() {'{'}</span>
          </h2>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-5">
          {/* Text content */}
          <motion.div 
            className="lg:col-span-3"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="rounded-lg border border-[#30363d] bg-[#161b22] p-6">
              <div className="mb-4 flex items-center justify-between border-b border-[#30363d] pb-4">
                <span className="flex items-center gap-2 text-sm text-[#7d8590]">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  about.md
                </span>
                <div className="flex gap-1.5">
                  <div className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
                  <div className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
                  <div className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
                </div>
              </div>
              
              <div className="space-y-4">
                {aboutData.paragraphs.map((paragraph, i) => (
                  <motion.p 
                    key={i}
                    variants={itemVariants}
                    className="text-sm leading-relaxed text-[#c9d1d9] lg:text-base"
                  >
                    <span className="text-[#484f58]">// Line {i + 1}</span>
                    <br />
                    {paragraph}
                  </motion.p>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Stats as code constants */}
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="rounded-lg border border-[#30363d] bg-[#0d1117] p-6">
              <div className="mb-4 text-sm text-[#7d8590]">stats.json</div>
              <pre className="text-sm">
                <code className="text-[#e6edf3]">
                  {'{'}"stats": {'{'}
                  {aboutData.stats.map((stat, i) => (
                    <div key={stat.label} className="ml-4">
                      <span className="syntax-string">"{stat.label.toLowerCase().replace(/\s+/g, '_')}"</span>
                      <span className="syntax-operator">: </span>
                      <span className="syntax-number">{stat.value.replace(/\+$/, '').replace(/\+/, '')}</span>
                      {stat.value.includes('+') && <span className="syntax-operator"> + </span>}
                      {i < aboutData.stats.length - 1 && <span className="text-[#e6edf3]">,</span>}
                    </div>
                  ))}
                  {'}'}
                  {'}'}
                </code>
              </pre>
            </div>

            {/* Return statement */}
            <div className="mt-6 rounded-lg bg-[#238636]/10 p-4">
              <p className="text-sm text-[#4ade80]">
                <span className="syntax-keyword">return</span>
                <span className="text-[#e6edf3]"> "</span>
                <span className="syntax-string">{aboutData.headline}</span>
                <span className="text-[#e6edf3]">";</span>
              </p>
            </div>
          </motion.div>
        </div>

        {/* Closing brace */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-8 text-2xl font-bold text-[#e6edf3]"
        >
          {'}'}
        </motion.div>
      </div>
    </section>
  );
}
