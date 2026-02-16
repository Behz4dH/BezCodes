"use client";

import { useActiveSection } from "@/lib/use-active-section";

const sectionToPath: Record<string, string> = {
  "": "README.md",
  "#about": "about.md",
  "#skills": "skills.json",
  "#tech": "tech.ts",
  "#projects": "projects/",
  "#contact": "contact.md",
};

const sectionToIcon: Record<string, string> = {
  "": "📝",
  "#about": "📝",
  "#skills": "🔧",
  "#tech": "⚙️",
  "#projects": "📁",
  "#contact": "📝",
};

export function Breadcrumbs() {
  const activeSection = useActiveSection();
  const filename = sectionToPath[activeSection] || "README.md";
  const icon = sectionToIcon[activeSection] || "📝";

  return (
    <div className="breadcrumb">
      <span className="text-[#8b949e]">portfolio</span>
      <span className="breadcrumb-separator">/</span>
      <span className="text-[#8b949e]">src</span>
      <span className="breadcrumb-separator">/</span>
      <span className="flex items-center gap-1.5 text-[#e6edf3]">
        <span>{icon}</span>
        <span>{filename}</span>
      </span>
    </div>
  );
}
