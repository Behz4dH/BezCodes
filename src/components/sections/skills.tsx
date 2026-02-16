"use client";

import { skills, categoryLabels, categoryOrder, type Skill } from "@/data/portfolio";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { 
  SiPython, SiTypescript, SiReact, SiNextdotjs, SiNodedotjs,
  SiPostgresql, SiDocker, SiGit, SiLinux, SiPytorch,
  SiLangchain, SiHuggingface, SiScikitlearn, SiFastapi,
  SiTailwindcss, SiVercel
} from "react-icons/si";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  "Python": SiPython,
  "TypeScript": SiTypescript,
  "React": SiReact,
  "Next.js": SiNextdotjs,
  "Node.js": SiNodedotjs,
  "PostgreSQL": SiPostgresql,
  "Docker": SiDocker,
  "Git": SiGit,
  "Linux": SiLinux,
  "PyTorch": SiPytorch,
  "LangChain": SiLangchain,
  "Hugging Face": SiHuggingface,
  "Scikit-learn": SiScikitlearn,
  "FastAPI": SiFastapi,
  "Tailwind CSS": SiTailwindcss,
  "Vercel": SiVercel,
};

const iconColors: Record<string, string> = {
  "Python": "#3776ab",
  "TypeScript": "#3178c6",
  "React": "#61dafb",
  "Next.js": "#ffffff",
  "Node.js": "#339933",
  "PostgreSQL": "#4169e1",
  "Docker": "#2496ed",
  "Git": "#f05032",
  "Linux": "#fcc624",
  "PyTorch": "#ee4c2c",
  "LangChain": "#1c3c3c",
  "Hugging Face": "#ffd21e",
  "Scikit-learn": "#f7931e",
  "FastAPI": "#009688",
  "Tailwind CSS": "#06b6d4",
  "Vercel": "#ffffff",
};

function SkillCard({ skill }: { skill: Skill }) {
  const [expanded, setExpanded] = useState(false);
  const IconComponent = iconMap[skill.name];
  const iconColor = iconColors[skill.name] || "#7d8590";

  return (
    <motion.div
      layout
      className={cn(
        "group cursor-pointer rounded-lg border border-[#30363d] bg-[#161b22] transition-all duration-200",
        "hover:border-[#4ade80]/50 hover:bg-[#1c2128]",
        expanded && "border-[#4ade80] bg-[#1c2128]"
      )}
      onClick={() => setExpanded(!expanded)}
    >
      <div className="border-b border-[#30363d] bg-[#0d1117] px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            {IconComponent ? (
              <div style={{ color: iconColor }}>
                <IconComponent className="h-5 w-5 transition-transform group-hover:scale-110" />
              </div>
            ) : (
              <div 
                className="flex h-5 w-5 items-center justify-center rounded text-[10px] font-bold"
                style={{ backgroundColor: iconColor + "30", color: iconColor }}
              >
                {skill.name.slice(0, 2).toUpperCase()}
              </div>
            )}
            <span className="text-sm font-medium text-[#e6edf3]">{skill.name}</span>
          </div>
          <div className="flex gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                className={cn(
                  "h-1.5 w-1.5 rounded-full transition-colors",
                  i < skill.proficiency ? "bg-[#4ade80]" : "bg-[#30363d]"
                )}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="p-4">
        {/* Proficiency bar */}
        <div className="mb-3">
          <div className="h-1.5 w-full rounded-full bg-[#30363d]">
            <div 
              className="h-full rounded-full bg-[#4ade80] transition-all duration-500"
              style={{ width: `${(skill.proficiency / 5) * 100}%` }}
            />
          </div>
          <div className="mt-1 flex justify-between text-xs text-[#7d8590]">
            <span>proficiency</span>
            <span>{skill.proficiency}/5</span>
          </div>
        </div>

        <AnimatePresence>
          {expanded && skill.opinion && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="border-t border-[#30363d] pt-3"
            >
              <p className="syntax-comment text-xs">
                // {skill.opinion}
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {!expanded && skill.opinion && (
          <p className="mt-2 text-xs text-[#484f58]">
            Click to view comments
          </p>
        )}
      </div>
    </motion.div>
  );
}

export function Skills() {
  const [activeCategory, setActiveCategory] = useState<Skill["category"] | "all">("all");

  const filteredSkills =
    activeCategory === "all"
      ? skills
      : skills.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="relative px-6 py-16 lg:px-12">
      {/* Line numbers */}
      <div className="absolute left-0 top-0 hidden h-full select-none flex-col border-r border-[#30363d] bg-[#010409] px-3 py-16 text-right text-sm text-[#484f58] lg:flex">
        {Array.from({ length: 40 }).map((_, i) => (
          <div key={i}>{i + 50}</div>
        ))}
      </div>

      <div className="mx-auto max-w-5xl lg:ml-20">
        {/* Import Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <div className="text-sm text-[#8b949e] syntax-comment">// skills.json</div>
          <h2 className="mt-4 text-2xl font-bold lg:text-3xl">
            <span className="syntax-keyword">import</span>
            <span className="text-[#e6edf3]"> {"{ "}</span>
            <span className="syntax-class">Skills</span>
            <span className="text-[#e6edf3]"> {"} "}</span>
            <span className="syntax-keyword">from</span>
            <span className="syntax-string"> &apos;./tech-stack&apos;</span>
            <span className="text-[#e6edf3]">;</span>
          </h2>
        </motion.div>

        {/* Category Filter as Import Statements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mb-8 flex flex-wrap gap-2"
        >
          <button
            onClick={() => setActiveCategory("all")}
            className={cn(
              "rounded px-3 py-1.5 text-xs font-medium transition-all",
              activeCategory === "all"
                ? "bg-[#4ade80] text-black"
                : "border border-[#30363d] bg-[#21262d] text-[#c9d1d9] hover:bg-[#30363d]"
            )}
          >
            import *
          </button>
          {categoryOrder.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "rounded px-3 py-1.5 text-xs font-medium transition-all",
                activeCategory === cat
                  ? "bg-[#4ade80] text-black"
                  : "border border-[#30363d] bg-[#21262d] text-[#c9d1d9] hover:bg-[#30363d]"
              )}
            >
              {`import { ${cat} }`}
            </button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          layout
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill, i) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
              >
                <SkillCard skill={skill} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
