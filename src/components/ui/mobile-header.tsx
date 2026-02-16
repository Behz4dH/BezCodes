"use client";

import { navLinks } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import { useActiveSection } from "@/lib/use-active-section";
import { Menu, X, FileCode } from "lucide-react";
import { useState } from "react";

const tabNames: Record<string, string> = {
  "": "README.md",
  "#about": "about.md",
  "#skills": "skills.json",
  "#tech": "tech.ts",
  "#projects": "projects/",
  "#contact": "contact.md",
};

const fileIcons: Record<string, string> = {
  "": "📝",
  "#about": "📝",
  "#skills": "🔧",
  "#tech": "⚙️",
  "#projects": "📁",
  "#contact": "📝",
};

export function MobileHeader() {
  const activeSection = useActiveSection();
  const [menuOpen, setMenuOpen] = useState(false);
  const filename = tabNames[activeSection] || "README.md";
  const icon = fileIcons[activeSection] || "📝";

  return (
    <>
      {/* Sticky Mobile Header */}
      <div className="sticky top-0 z-50 lg:hidden">
        {/* Main Header Bar */}
        <div className="flex h-12 items-center justify-between border-b border-[#30363d] bg-[#010409] px-4">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-8 w-8 items-center justify-center rounded text-[#7d8590] transition-colors hover:bg-[#161b22] hover:text-[#e6edf3]"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>

          <a href={activeSection || "#"} className="flex items-center gap-2 text-sm">
            <FileCode className="h-4 w-4 text-[#7d8590]" />
            <span className="flex items-center gap-1.5">
              <span>{icon}</span>
              <span className="max-w-[120px] truncate text-[#e6edf3]">{filename}</span>
            </span>
          </a>

          <div className="flex h-5 items-center gap-1.5 rounded bg-[#238636]/20 px-2 text-xs text-[#4ade80]">
            <div className="h-1.5 w-1.5 rounded-full bg-[#4ade80]" />
            <span>main</span>
          </div>
        </div>

        <div className="flex h-8 items-center gap-2 border-b border-[#30363d] bg-[#0d1117] px-4 text-xs">
          <span className="text-[#8b949e]">portfolio</span>
          <span className="text-[#484f58]">/</span>
          <span className="text-[#8b949e]">src</span>
          <span className="text-[#484f58]">/</span>
          <span className="text-[#e6edf3]">{filename}</span>
        </div>

        <div className="flex overflow-x-auto border-b border-[#30363d] bg-[#010409] px-2 py-1">
          {["", ...navLinks.map((l) => l.href)].map((section) => (
            <a
              key={section || "home"}
              href={section || "#"}
              onClick={() => setMenuOpen(false)}
              className={cn(
                "flex shrink-0 items-center gap-1.5 rounded px-3 py-1.5 text-xs transition-colors",
                (activeSection === section || (section === "" && activeSection === ""))
                  ? "bg-[#161b22] text-[#e6edf3]"
                  : "text-[#7d8590] hover:bg-[#161b22] hover:text-[#e6edf3]"
              )}
            >
              <span className={cn(
                "h-1.5 w-1.5 rounded-full",
                (activeSection === section || (section === "" && activeSection === ""))
                  ? "bg-[#4ade80]"
                  : "bg-[#30363d]"
              )} />
              <span className="max-w-[80px] truncate">{tabNames[section]}</span>
            </a>
          ))}
        </div>
      </div>

      {menuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="absolute inset-0 bg-black/50" onClick={() => setMenuOpen(false)} />
          <div className="absolute left-0 top-28 w-64 border-r border-[#30363d] bg-[#010409] shadow-2xl">
            <div className="flex h-10 items-center px-4 text-xs font-bold uppercase tracking-wider text-[#7d8590]">
              Explorer
            </div>
            <nav className="px-2 pb-4">
              <div className="mb-2 flex items-center gap-2 px-2 py-1 text-sm text-[#e6edf3]">
                <svg className="h-4 w-4 rotate-90 text-[#7d8590]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                <span className="font-semibold">portfolio</span>
              </div>
              {["", ...navLinks.map((l) => l.href)].map((section) => (
                <a
                  key={section || "home"}
                  href={section || "#"}
                  onClick={() => setMenuOpen(false)}
                  className={cn(
                    "flex items-center gap-2 px-4 py-2 text-sm transition-colors",
                    (activeSection === section || (section === "" && activeSection === ""))
                      ? "border-l-2 border-[#4ade80] bg-[#161b22] text-[#e6edf3]"
                      : "border-l-2 border-transparent text-[#7d8590] hover:bg-[#161b22] hover:text-[#e6edf3]"
                  )}
                >
                  <span>{fileIcons[section] || "📝"}</span>
                  <span>{tabNames[section] || "README.md"}</span>
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
