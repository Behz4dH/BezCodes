// ===== PORTFOLIO DATA =====
// Single source of truth for all portfolio content.
// Update this file to customize your portfolio.

export const siteConfig = {
  name: "Behzad Hatamikia",
  title: "Software Engineer | AI Engineer",
  description:
    "Software Engineer with 3+ years of experience building internal platforms, backend services, and data-driven applications. Currently focused on AI engineering through an MSc in Applied Artificial Intelligence.",
  url: "https://behzadhatamikia.com",
  email: "behzadhatamikia@outlook.com",
  github: "https://github.com/behz4dh",
  linkedin: "https://linkedin.com/in/behzadhatamikia",
  twitter: "",
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Tech", href: "#tech" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
] as const;

export const aboutData = {
  headline: "Engineer first. AI practitioner by conviction.",
  paragraphs: [
    "I started in software engineering — building internal platforms, backend services, and data-driven applications across industrial and IT environments. Over 3+ years, I learned to turn ambiguous requirements into reliable systems, improve existing architecture, and ship practical solutions that real users depend on daily.",
    "Now I'm pursuing an MSc in Applied Artificial Intelligence at the University of Huddersfield, bringing engineering discipline to the AI space. My approach is straightforward — build maintainable software first, then apply AI where it measurably improves outcomes.",
    "I work best at the intersection of product needs and technical execution. Whether it's a company-wide CMS serving hundreds of users, a warehouse management system handling thousands of SKUs, or a RAG pipeline answering questions over technical documents — I care about building things that work in production.",
  ],
  stats: [
    { label: "Years in Engineering", value: "3+" },
    { label: "Projects Delivered", value: "15+" },
    { label: "AI Focus Since", value: "2025" },
    { label: "Technologies", value: "25+" },
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
      "My primary language for AI/ML and backend work. The ecosystem for data science and ML is unmatched.",
  },
  {
    name: "PyTorch",
    category: "ai",
    proficiency: 4,
    opinion:
      "Go-to for deep learning. Built a dual-input CNN for medical imaging classification with it.",
  },
  {
    name: "TensorFlow",
    category: "ai",
    proficiency: 3,
    opinion:
      "Solid production framework. I reach for PyTorch first, but TF has its strengths in deployment.",
  },
  {
    name: "LangChain",
    category: "ai",
    proficiency: 4,
    opinion:
      "Essential for orchestrating LLM workflows. Used it to build RAG pipelines and agentic coding assistants.",
  },
  {
    name: "Scikit-learn",
    category: "ai",
    proficiency: 4,
    opinion:
      "The best starting point for classical ML. Clean API, rigorous, and always reliable.",
  },
  {
    name: "Pandas",
    category: "ai",
    proficiency: 4,
    opinion:
      "Core tool for data wrangling. Processed 878k+ reviews and built feature pipelines with it.",
  },
  {
    name: "JavaScript",
    category: "frontend",
    proficiency: 5,
    opinion:
      "Foundation of everything on the web. Knowing it deeply makes every framework easier.",
  },
  {
    name: "TypeScript",
    category: "frontend",
    proficiency: 4,
    opinion:
      "Non-negotiable for serious JS projects. The type safety pays dividends at scale.",
  },
  {
    name: "React",
    category: "frontend",
    proficiency: 4,
    opinion:
      "Battle-tested and composable. Server Components changed the game for performance.",
  },
  {
    name: "Vue",
    category: "frontend",
    proficiency: 4,
    opinion:
      "Elegant and approachable. The composition API brought it up to par with React's flexibility.",
  },
  {
    name: "Next.js",
    category: "frontend",
    proficiency: 4,
    opinion:
      "The React meta-framework done right. App Router is a paradigm shift for web development.",
  },
  {
    name: "Nuxt",
    category: "frontend",
    proficiency: 4,
    opinion:
      "Vue's answer to Next.js. Great DX with auto-imports and server routes built in.",
  },
  {
    name: "Node.js",
    category: "backend",
    proficiency: 4,
    opinion:
      "My go-to for APIs and tooling on the JS side. The ecosystem depth is unmatched.",
  },
  {
    name: "FastAPI",
    category: "backend",
    proficiency: 4,
    opinion:
      "Python's best web framework. Auto-generated docs and async support make it ideal for ML-serving APIs.",
  },
  {
    name: "Django",
    category: "backend",
    proficiency: 4,
    opinion:
      "Batteries-included and production-ready. Built end-to-end pipelines from data collection to user-facing apps with it.",
  },
  {
    name: "Flask",
    category: "backend",
    proficiency: 3,
    opinion:
      "Lightweight and flexible. Good for quick prototypes and microservices.",
  },
  {
    name: "SQL",
    category: "backend",
    proficiency: 5,
    opinion:
      "Designed, normalized, and indexed relational databases across multiple production systems. Fundamentals matter.",
  },
  {
    name: "PHP",
    category: "backend",
    proficiency: 3,
    opinion:
      "Used it in production environments. Modern PHP is much better than its reputation suggests.",
  },
  {
    name: "Docker",
    category: "devops",
    proficiency: 4,
    opinion:
      "Containerization is table stakes. The only sane way to ship reproducible environments.",
  },
  {
    name: "AWS",
    category: "devops",
    proficiency: 3,
    opinion:
      "Cloud deployment fundamentals. Enough to get services running and scaled properly.",
  },
  {
    name: "Git",
    category: "tools",
    proficiency: 5,
    opinion:
      "The backbone of all collaboration. I use it every day and think everyone should learn the internals.",
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
    title: "RAG Knowledge Assistant",
    description:
      "A Retrieval-Augmented Generation assistant for answering questions over long technical documents. Built ingestion pipelines for PDFs and markdown with chunking, metadata enrichment, and vector indexing. Implements reranking and citation-grounded responses for answer relevance and traceability.",
    tags: ["Python", "LangChain", "FAISS", "FastAPI", "RAG"],
    featured: true,
    github: "https://github.com/behz4dh",
  },
  {
    title: "Agentic Coding Assistant",
    description:
      "An agentic coding workflow that plans tasks, inspects repositories, applies code edits, and validates outcomes with tests. Designed tool orchestration for code search, patch generation, and command execution with checkpoint-based error recovery.",
    tags: ["Python", "LangChain", "LLM", "Agents", "Automation"],
    featured: true,
    github: "https://github.com/behz4dh",
  },
  {
    title: "Recommendation Under Extreme Sparsity",
    description:
      "MSc research project: content-based hotel recommendation pipeline for sparse user interaction data. Processed ~878k reviews from ~569k users across ~3.9k hotels using SBERT embeddings and FAISS retrieval with recency-weighted aggregation and late-fusion ranking.",
    tags: ["Python", "SBERT", "FAISS", "PyTorch", "NumPy"],
    featured: true,
    github: "https://github.com/behz4dh",
  },
  {
    title: "Shoulder Implant Classification",
    description:
      "Achieved 92% classification accuracy matching published research benchmarks. Designed a dual-input CNN architecture to classify implant manufacturers from X-ray images. Integrated explainable AI (XAI) techniques for clinical interpretability.",
    tags: ["Python", "PyTorch", "CNN", "XAI", "Claude API"],
    featured: true,
    github: "https://github.com/behz4dh",
  },
  {
    title: "PhishNet - Phishing Detection",
    description:
      "Chrome extension with 95% detection accuracy for real-time website phishing detection. Scraped and analyzed 10k+ websites to identify phishing indicators. End-to-end pipeline from data collection to user-facing application built with Django.",
    tags: ["Python", "Django", "Chrome Extension", "ML", "Selenium"],
    featured: true,
    github: "https://github.com/behz4dh",
  },
  {
    title: "Quant Strategy Factory",
    description:
      "Modular Python strategy factory with YAML-driven presets and pipeline builders for rapid strategy iteration. Built a shared vectorbt backtesting engine with risk-based sizing, SL/TP handling, structured trade logging, and DuckDB persistence.",
    tags: ["Python", "vectorbt", "DuckDB", "YAML", "Quant"],
    featured: true,
    github: "https://github.com/behz4dh",
  },
];

export const contactData = {
  headline: "Let's build something that works.",
  description:
    "I'm open to discussing product-oriented Software Engineer roles, AI/ML engineering opportunities, or interesting collaborations. Straightforward communication, practical solutions.",
};
