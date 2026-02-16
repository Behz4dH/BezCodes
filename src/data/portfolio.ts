// ===== PORTFOLIO DATA =====
// Single source of truth for all portfolio content.
// Update this file to customize your portfolio.

export const siteConfig = {
  name: "Your Name",
  title: "AI & Software Engineer",
  description:
    "Building intelligent systems at the intersection of software engineering and artificial intelligence.",
  url: "https://yoursite.com",
  email: "hello@yoursite.com",
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  twitter: "https://twitter.com/yourusername",
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Tech", href: "#tech" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
] as const;

export const aboutData = {
  headline: "Engineer by training. AI practitioner by conviction.",
  paragraphs: [
    "I started in software engineering — building systems, writing clean code, and solving real problems with well-architected solutions. That foundation gave me the discipline and depth to build things that actually work in production.",
    "This year, I made a deliberate shift deeper into AI. Not because it's trendy, but because I believe the most impactful software of the next decade will be intelligent software. I'm now working at the intersection of both worlds — bringing engineering rigor to AI systems.",
    "I care about code quality, thoughtful architecture, and building tools that make a real difference. Whether it's a full-stack application or a machine learning pipeline, I approach every project with the same standard: it should be fast, reliable, and maintainable.",
  ],
  stats: [
    { label: "Years in Engineering", value: "5+" },
    { label: "Projects Delivered", value: "20+" },
    { label: "AI Focus Since", value: "2025" },
    { label: "Technologies", value: "30+" },
  ],
};

export type Skill = {
  name: string;
  category: "ai" | "backend" | "frontend" | "devops" | "tools";
  proficiency: number; // 1-5
  opinion?: string;
};

export const skills: Skill[] = [
  {
    name: "Python",
    category: "ai",
    proficiency: 5,
    opinion:
      "The lingua franca of AI. Unmatched ecosystem for ML, but I still think its type system needs work.",
  },
  {
    name: "PyTorch",
    category: "ai",
    proficiency: 4,
    opinion:
      "My go-to for deep learning. The imperative style makes debugging intuitive — something TensorFlow never got right.",
  },
  {
    name: "LangChain",
    category: "ai",
    proficiency: 4,
    opinion:
      "Powerful for orchestrating LLM workflows, though the abstraction layers can feel heavy for simple tasks.",
  },
  {
    name: "Hugging Face",
    category: "ai",
    proficiency: 4,
    opinion:
      "Democratized ML in ways nothing else has. The Transformers library is essential in any AI engineer's toolkit.",
  },
  {
    name: "Scikit-learn",
    category: "ai",
    proficiency: 4,
    opinion:
      "Still the best starting point for classical ML. Clean API, excellent documentation.",
  },
  {
    name: "TypeScript",
    category: "frontend",
    proficiency: 5,
    opinion:
      "Non-negotiable for any serious JS project. The type safety alone has saved me countless hours of debugging.",
  },
  {
    name: "React",
    category: "frontend",
    proficiency: 5,
    opinion:
      "Battle-tested and endlessly composable. Server Components changed the game for performance.",
  },
  {
    name: "Next.js",
    category: "frontend",
    proficiency: 5,
    opinion:
      "The React meta-framework done right. App Router is a paradigm shift in how we build web apps.",
  },
  {
    name: "Tailwind CSS",
    category: "frontend",
    proficiency: 5,
    opinion:
      "Utility-first is the way. Once you stop fighting it, your velocity triples.",
  },
  {
    name: "Node.js",
    category: "backend",
    proficiency: 5,
    opinion:
      "My default for APIs and tooling. The ecosystem depth is unmatched.",
  },
  {
    name: "PostgreSQL",
    category: "backend",
    proficiency: 4,
    opinion:
      "The most reliable database I've used. Extensions like pgvector make it relevant even for AI workloads.",
  },
  {
    name: "FastAPI",
    category: "backend",
    proficiency: 4,
    opinion:
      "Python's best web framework. Auto-generated docs and async support make it ideal for ML-serving APIs.",
  },
  {
    name: "Docker",
    category: "devops",
    proficiency: 4,
    opinion:
      "Containerization is table stakes now. It's the only sane way to ship reproducible environments.",
  },
  {
    name: "Git",
    category: "tools",
    proficiency: 5,
    opinion:
      "The backbone of all collaboration. I think everyone should learn the internals — not just the commands.",
  },
  {
    name: "Linux",
    category: "devops",
    proficiency: 4,
    opinion:
      "Every engineer should be comfortable on the command line. It's where real work gets done.",
  },
];

export const categoryLabels: Record<Skill["category"], string> = {
  ai: "AI & Machine Learning",
  frontend: "Frontend",
  backend: "Backend",
  devops: "DevOps & Infrastructure",
  tools: "Tools & Workflow",
};

export const categoryOrder: Skill["category"][] = [
  "ai",
  "frontend",
  "backend",
  "devops",
  "tools",
];

export type Project = {
  title: string;
  description: string;
  tags: string[];
  image?: string;
  github?: string;
  live?: string;
  featured: boolean;
};

export const projects: Project[] = [
  {
    title: "AI Document Analyzer",
    description:
      "An intelligent document processing pipeline that uses LLMs to extract, classify, and summarize content from unstructured documents. Built with LangChain, FastAPI, and a React frontend.",
    tags: ["Python", "LangChain", "FastAPI", "React", "PostgreSQL"],
    featured: true,
    github: "https://github.com/yourusername/doc-analyzer",
    live: "https://doc-analyzer.demo.com",
  },
  {
    title: "Real-time ML Dashboard",
    description:
      "A monitoring dashboard for machine learning models in production. Tracks drift, performance metrics, and prediction distributions with live-updating visualizations.",
    tags: ["TypeScript", "Next.js", "Python", "WebSocket", "D3.js"],
    featured: true,
    github: "https://github.com/yourusername/ml-dashboard",
  },
  {
    title: "Smart Task Orchestrator",
    description:
      "A distributed task queue system with intelligent prioritization using ML-based scheduling. Handles thousands of concurrent jobs with automatic retry and dead-letter management.",
    tags: ["Node.js", "Redis", "Docker", "TypeScript"],
    featured: true,
    github: "https://github.com/yourusername/task-orchestrator",
  },
  {
    title: "Neural Code Reviewer",
    description:
      "An automated code review tool powered by fine-tuned language models. Integrates with GitHub PRs to provide context-aware suggestions and detect anti-patterns.",
    tags: ["Python", "PyTorch", "Hugging Face", "GitHub API"],
    featured: false,
    github: "https://github.com/yourusername/code-reviewer",
  },
];

export const contactData = {
  headline: "Let's build something intelligent.",
  description:
    "I'm always open to discussing new projects, opportunities in AI/ML engineering, or interesting collaborations. Drop me a message.",
};
