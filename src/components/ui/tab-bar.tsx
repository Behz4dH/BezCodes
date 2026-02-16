"use client";

import { navLinks } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import { useActiveSection } from "@/lib/use-active-section";
import { X } from "lucide-react";

const tabNames: Record<string, string> = {
  "": "README.md",
  "#about": "about.md",
  "#skills": "skills.json",
  "#tech": "tech.ts",
  "#projects": "projects/",
  "#contact": "contact.md",
};

export function TabBar() {
  const activeSection = useActiveSection();

  return (
    <div className="flex overflow-x-auto border-b border-[#30363d] bg-[#010409]">
      {["", ...navLinks.map((l) => l.href)].map((section) => (
        <a
          key={section || "home"}
          href={section || "#"}
          className={cn(
            "tab whitespace-nowrap",
            (activeSection === section || (section === "" && activeSection === "")) && "active"
          )}
        >
          <span className={cn(
            "h-2 w-2 rounded-full",
            (activeSection === section || (section === "" && activeSection === "")) && "bg-[#4ade80]"
          )} />
          <span>{tabNames[section] || "untitled"}</span>
          <X className="h-3 w-3 opacity-0 transition-opacity hover:opacity-100" />
        </a>
      ))}
    </div>
  );
}
