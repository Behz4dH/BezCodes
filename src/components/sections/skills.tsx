"use client";

import { skills, categoryLabels, categoryOrder, type Skill } from "@/data/portfolio";
import { Section, SectionHeader } from "@/components/ui/section";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/scroll-reveal";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";

function SkillCard({ skill }: { skill: Skill }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      layout
      className={cn(
        "group cursor-pointer rounded-xl border border-border/50 bg-surface/50 p-5 transition-all duration-300",
        "hover:-translate-y-0.5 hover:border-accent/30 hover:shadow-md",
        expanded && "border-accent/40 bg-surface"
      )}
      onClick={() => setExpanded(!expanded)}
    >
      <div className="flex items-center justify-between">
        <h4 className="text-sm font-semibold text-foreground">{skill.name}</h4>
        <div className="flex gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className={cn(
                "h-1.5 w-1.5 rounded-full transition-colors",
                i < skill.proficiency ? "bg-accent" : "bg-border"
              )}
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {expanded && skill.opinion && (
          <motion.p
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="mt-3 text-sm leading-relaxed text-muted"
          >
            {skill.opinion}
          </motion.p>
        )}
      </AnimatePresence>

      {skill.opinion && (
        <p className={cn(
          "mt-2 text-xs text-muted-foreground transition-opacity",
          expanded ? "opacity-0 h-0" : "opacity-100"
        )}>
          Click to read my take
        </p>
      )}
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
    <Section id="skills" className="dot-grid bg-surface/30">
      <ScrollReveal>
        <SectionHeader
          label="Skills"
          title="What I work with."
          description="Technologies and tools I use daily, along with my honest opinions on each."
        />
      </ScrollReveal>

      {/* Category filter */}
      <ScrollReveal>
        <div className="mb-10 flex flex-wrap gap-2">
          <button
            onClick={() => setActiveCategory("all")}
            className={cn(
              "rounded-full px-4 py-2 text-xs font-medium transition-all duration-200",
              activeCategory === "all"
                ? "bg-foreground text-background"
                : "border border-border text-muted hover:border-foreground hover:text-foreground"
            )}
          >
            All
          </button>
          {categoryOrder.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "rounded-full px-4 py-2 text-xs font-medium transition-all duration-200",
                activeCategory === cat
                  ? "bg-foreground text-background"
                  : "border border-border text-muted hover:border-foreground hover:text-foreground"
              )}
            >
              {categoryLabels[cat]}
            </button>
          ))}
        </div>
      </ScrollReveal>

      {/* Skills grid */}
      <motion.div
        layout
        className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3"
      >
        <AnimatePresence mode="popLayout">
          {filteredSkills.map((skill) => (
            <motion.div
              key={skill.name}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <SkillCard skill={skill} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </Section>
  );
}
