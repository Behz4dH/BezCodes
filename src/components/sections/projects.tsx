"use client";

import { projects } from "@/data/portfolio";
import { Section, SectionHeader } from "@/components/ui/section";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/scroll-reveal";
import { cn } from "@/lib/utils";
import { CardSpotlight } from "@/components/ui/card-spotlight";

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[number];
  index: number;
}) {
  const isEven = index % 2 === 0;

  return (
    <CardSpotlight
      className={cn(
        "group rounded-3xl border border-border/50 bg-surface/30 p-8 transition-all duration-500 hover:-translate-y-1 hover:border-accent/20 hover:shadow-lg md:p-10",
        !isEven && "md:direction-rtl"
      )}
    >
      <div className={cn("grid gap-8 md:grid-cols-2")}>
      {/* Image placeholder */}
      <div
        className={cn(
          "relative aspect-video overflow-hidden rounded-xl bg-gradient-to-br from-surface to-border/30 md:direction-ltr",
          "flex items-center justify-center"
        )}
      >
        <div className="text-center">
          <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="text-accent"
            >
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <polyline points="21 15 16 10 5 21" />
            </svg>
          </div>
          <p className="text-xs text-muted-foreground">Project Preview</p>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col justify-center md:direction-ltr">
        {project.featured && (
          <span className="mb-3 inline-flex w-fit items-center rounded-full bg-accent/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-accent">
            Featured
          </span>
        )}

        <h3 className="text-xl font-bold tracking-tight text-foreground md:text-2xl">
          {project.title}
        </h3>

        <p className="mt-3 text-sm leading-relaxed text-muted md:text-base">
          {project.description}
        </p>

        {/* Tags */}
        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-border/60 px-3 py-1 text-xs font-medium text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="mt-6 flex gap-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-foreground"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              Source
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-accent transition-colors hover:text-accent-light"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
              Live Demo
            </a>
          )}
        </div>
      </div>
      </div>
    </CardSpotlight>
  );
}

export function Projects() {
  return (
    <Section id="projects" className="dot-grid bg-surface/30">
      <ScrollReveal>
        <SectionHeader
          label="Projects"
          title="Things I've built."
          description="Selected projects that showcase my work across AI, full-stack development, and systems engineering."
        />
      </ScrollReveal>

      <StaggerContainer className="space-y-8">
        {projects
          .filter((p) => p.featured)
          .map((project, i) => (
            <StaggerItem key={project.title}>
              <ProjectCard project={project} index={i} />
            </StaggerItem>
          ))}
      </StaggerContainer>
    </Section>
  );
}
