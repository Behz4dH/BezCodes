"use client";

import { motion } from "framer-motion";
import { 
  SiNextdotjs, SiFastapi, SiPytorch, SiLangchain,
  SiDocker, SiDjango, SiReact, SiVuedotjs
} from "react-icons/si";

type TechItem = {
  name: string;
  description: string;
  category: string;
};

const techStack: TechItem[] = [
  {
    name: "FastAPI",
    description: "High-performance Python API framework for ML serving and backend services",
    category: "Framework",
  },
  {
    name: "Django",
    description: "Batteries-included Python framework for full-stack production applications",
    category: "Framework",
  },
  {
    name: "React",
    description: "Component-based UI library for building interactive web applications",
    category: "Frontend",
  },
  {
    name: "Vue.js",
    description: "Progressive framework for building modern SPAs and SSR applications",
    category: "Frontend",
  },
  {
    name: "Next.js",
    description: "Full-stack React framework with SSR/SSG for production web apps",
    category: "Framework",
  },
  {
    name: "PyTorch",
    description: "Deep learning framework for research and production model training",
    category: "AI/ML",
  },
  {
    name: "LangChain",
    description: "LLM orchestration toolkit for RAG pipelines and agentic workflows",
    category: "AI/ML",
  },
  {
    name: "Docker",
    description: "Containerization for reproducible deployments and CI/CD pipelines",
    category: "Infrastructure",
  },
];

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  "FastAPI": SiFastapi,
  "Django": SiDjango,
  "React": SiReact,
  "Vue.js": SiVuedotjs,
  "Next.js": SiNextdotjs,
  "PyTorch": SiPytorch,
  "LangChain": SiLangchain,
  "Docker": SiDocker,
};

const iconColors: Record<string, string> = {
  "FastAPI": "#009688",
  "Django": "#092e20",
  "React": "#61dafb",
  "Vue.js": "#4fc08d",
  "Next.js": "#ffffff",
  "PyTorch": "#ee4c2c",
  "LangChain": "#1c3c3c",
  "Docker": "#2496ed",
};

const getColor = (category: string) => {
  const colors: Record<string, string> = {
    "Framework": "#ff7b72",
    "AI/ML": "#d2a8ff",
    "Database": "#ffa657",
    "Infrastructure": "#79c0ff",
    "Frontend": "#a5d6ff"
  };
  return colors[category] || "#7d8590";
};

function TechCard({ item, index }: { item: TechItem; index: number }) {
  const IconComponent = iconMap[item.name];
  const iconColor = iconColors[item.name] || getColor(item.category);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-lg border border-[#30363d] bg-[#161b22] p-5 transition-all duration-200 hover:border-[#4ade80]/30 hover:bg-[#1c2128]"
    >
      {/* Line number */}
      <div className="absolute right-4 top-4 font-mono text-xs text-[#484f58]">
        {String(index + 1).padStart(2, "0")}
      </div>

      <div className="flex items-start gap-4">
        {/* Icon */}
        {IconComponent ? (
          <div 
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded bg-[#0d1117]"
            style={{ color: iconColor }}
          >
            <IconComponent className="h-6 w-6 transition-transform group-hover:scale-110" />
          </div>
        ) : (
          <div 
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded bg-[#0d1117] font-mono text-sm font-bold"
            style={{ color: getColor(item.category) }}
          >
            {item.name.slice(0, 2).toUpperCase()}
          </div>
        )}

        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <h4 className="font-mono text-sm font-semibold text-[#e6edf3]">
              {item.name}
            </h4>
            <span 
              className="rounded px-1.5 py-0.5 text-[10px] font-medium"
              style={{ 
                backgroundColor: `${getColor(item.category)}20`,
                color: getColor(item.category)
              }}
            >
              {item.category}
            </span>
          </div>
          <p className="mt-1.5 text-sm leading-relaxed text-[#7d8590]">
            <span className="syntax-comment">// {item.description}</span>
          </p>
        </div>
      </div>

      {/* Hover glow effect */}
      <div 
        className="absolute inset-0 -z-10 opacity-0 transition-opacity group-hover:opacity-100"
        style={{
          background: `radial-gradient(200px circle at 50% 0%, ${getColor(item.category)}10, transparent 50%)`
        }}
      />
    </motion.div>
  );
}

export function TechStack() {
  return (
    <section id="tech" className="relative px-6 py-16 lg:px-12">
      {/* Line numbers */}
      <div className="absolute left-0 top-0 hidden h-full select-none flex-col border-r border-[#30363d] bg-[#010409] px-3 py-16 text-right text-sm text-[#484f58] lg:flex">
        {Array.from({ length: 35 }).map((_, i) => (
          <div key={i}>{i + 88}</div>
        ))}
      </div>

      <div className="mx-auto max-w-5xl lg:ml-20">
        {/* Interface Definition */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <div className="text-sm text-[#8b949e] syntax-comment">// tech.ts</div>
          <h2 className="mt-4 text-2xl font-bold lg:text-3xl">
            <span className="syntax-keyword">interface</span>{" "}
            <span className="syntax-class">TechStack</span>
            <span className="text-[#e6edf3]"> {"{"}</span>
          </h2>
        </motion.div>

        {/* Tech Grid */}
        <div className="grid gap-3 md:grid-cols-2">
          {techStack.map((item, i) => (
            <TechCard key={item.name} item={item} index={i} />
          ))}
        </div>

        {/* Closing brace */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-8 text-2xl font-bold text-[#e6edf3]"
        >
          {"}"}
        </motion.div>
      </div>
    </section>
  );
}
