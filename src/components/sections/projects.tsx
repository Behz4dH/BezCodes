"use client";

import { projects } from "@/data/portfolio";
import { motion } from "framer-motion";
import { Folder, GitBranch, ExternalLink } from "lucide-react";

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[number];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15 }}
      className="group overflow-hidden rounded-lg border border-[#30363d] bg-[#161b22] transition-all duration-200 hover:border-[#4ade80]/30"
    >
      {/* File Header */}
      <div className="flex items-center justify-between border-b border-[#30363d] bg-[#0d1117] px-4 py-3">
        <div className="flex items-center gap-3">
          <Folder className="h-4 w-4 text-[#7d8590]" />
          <span className="font-mono text-sm text-[#e6edf3]">
            {project.title.toLowerCase().replace(/\s+/g, '-')}/
          </span>
          {project.featured && (
            <span className="rounded bg-[#4ade80]/20 px-1.5 py-0.5 text-[10px] font-medium text-[#4ade80]">
              featured
            </span>
          )}
        </div>
        <div className="flex gap-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-[#7d8590] transition-colors hover:text-[#e6edf3]"
            >
              <GitBranch className="h-3.5 w-3.5" />
              <span>git</span>
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-[#7d8590] transition-colors hover:text-[#4ade80]"
            >
              <ExternalLink className="h-3.5 w-3.5" />
              <span>demo</span>
            </a>
          )}
        </div>
      </div>

      {/* File Content */}
      <div className="p-5">
        {/* README Preview */}
        <div className="mb-4">
          <div className="mb-2 flex items-center gap-2 text-xs text-[#484f58]">
            <span>README.md</span>
          </div>
          <p className="text-sm leading-relaxed text-[#c9d1d9]">
            {project.description}
          </p>
        </div>

        {/* Tech Stack as imports */}
        <div className="rounded bg-[#0d1117] p-3">
          <div className="mb-2 text-xs text-[#484f58]">package.json</div>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded bg-[#21262d] px-2 py-1 text-xs text-[#79c0ff]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function Projects() {
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <section id="projects" className="relative px-6 py-16 lg:px-12">
      {/* Line numbers */}
      <div className="absolute left-0 top-0 hidden h-full select-none flex-col border-r border-[#30363d] bg-[#010409] px-3 py-16 text-right text-sm text-[#484f58] lg:flex">
        {Array.from({ length: 40 }).map((_, i) => (
          <div key={i}>{i + 120}</div>
        ))}
      </div>

      <div className="mx-auto max-w-5xl lg:ml-20">
        {/* Class Definition */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <div className="text-sm text-[#8b949e] syntax-comment">// projects/</div>
          <h2 className="mt-4 text-2xl font-bold lg:text-3xl">
            <span className="syntax-keyword">class</span>{" "}
            <span className="syntax-class">Projects</span>
            <span className="text-[#e6edf3]"> {'{'}</span>
          </h2>
          <p className="mt-2 text-sm text-[#7d8590]">
            <span className="syntax-keyword">constructor</span>
            <span className="text-[#e6edf3]">() {'{'}</span>
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid gap-4 md:grid-cols-2">
          {featuredProjects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>

        {/* Closing braces */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-8 space-y-0 text-2xl font-bold text-[#e6edf3]"
        >
          <div>{'}'}</div>
          <div>{'}'}</div>
        </motion.div>
      </div>
    </section>
  );
}
