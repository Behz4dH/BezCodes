"use client";

import { Section, SectionHeader } from "@/components/ui/section";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/scroll-reveal";

type TechItem = {
  name: string;
  description: string;
  category: string;
};

const techStack: TechItem[] = [
  {
    name: "Next.js",
    description: "Full-stack React framework for production-grade web apps",
    category: "Framework",
  },
  {
    name: "FastAPI",
    description: "High-performance Python API framework for ML serving",
    category: "Framework",
  },
  {
    name: "PyTorch",
    description: "Deep learning framework for research and production",
    category: "AI/ML",
  },
  {
    name: "LangChain",
    description: "LLM orchestration and agent workflow toolkit",
    category: "AI/ML",
  },
  {
    name: "PostgreSQL",
    description: "Relational database with vector search via pgvector",
    category: "Database",
  },
  {
    name: "Docker",
    description: "Containerization for reproducible deployments",
    category: "Infrastructure",
  },
  {
    name: "Tailwind CSS",
    description: "Utility-first CSS for rapid, consistent UI development",
    category: "Frontend",
  },
  {
    name: "Vercel",
    description: "Edge-first deployment platform for web applications",
    category: "Infrastructure",
  },
];

function TechCard({ item, index }: { item: TechItem; index: number }) {
  return (
    <div className="group relative flex items-start gap-5 rounded-2xl border border-border/50 bg-surface/30 p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/30 hover:bg-surface/60 hover:shadow-md">
      {/* Index number */}
      <span className="font-mono text-3xl font-bold leading-none text-border transition-colors group-hover:text-accent/30">
        {String(index + 1).padStart(2, "0")}
      </span>

      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-3">
          <h4 className="text-base font-semibold text-foreground">
            {item.name}
          </h4>
          <span className="rounded-full bg-surface px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
            {item.category}
          </span>
        </div>
        <p className="mt-1.5 text-sm leading-relaxed text-muted">
          {item.description}
        </p>
      </div>
    </div>
  );
}

export function TechStack() {
  return (
    <Section id="tech">
      <ScrollReveal>
        <SectionHeader
          label="Tech Stack"
          title="My daily toolkit."
          description="The core technologies I reach for when building intelligent systems and modern applications."
        />
      </ScrollReveal>

      <StaggerContainer className="grid gap-4 md:grid-cols-2">
        {techStack.map((item, i) => (
          <StaggerItem key={item.name}>
            <TechCard item={item} index={i} />
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Section>
  );
}
