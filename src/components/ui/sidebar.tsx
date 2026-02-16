"use client";

import { navLinks } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import { useActiveSection } from "@/lib/use-active-section";
import { FileCode, FileJson, FileText, FolderOpen, Settings } from "lucide-react";

const fileIcons: Record<string, React.ReactNode> = {
  "#about": <FileText className="h-4 w-4 text-[#a5d6ff]" />,
  "#skills": <FileJson className="h-4 w-4 text-[#ffa657]" />,
  "#tech": <FileCode className="h-4 w-4 text-[#ff7b72]" />,
  "#projects": <FolderOpen className="h-4 w-4 text-[#d2a8ff]" />,
  "#contact": <FileText className="h-4 w-4 text-[#a5d6ff]" />,
};

export function Sidebar() {
  const activeSection = useActiveSection();

  return (
    <aside className="fixed left-0 top-0 z-40 hidden h-screen w-60 flex-col border-r border-[#30363d] bg-[#010409] lg:flex">
      {/* Explorer Header */}
      <div className="flex h-10 items-center px-4 text-xs font-bold uppercase tracking-wider text-[#7d8590]">
        Explorer
      </div>

      {/* Portfolio Folder */}
      <div className="px-2">
        <div className="flex items-center gap-2 px-2 py-1 text-sm text-[#e6edf3]">
          <svg className="h-4 w-4 rotate-90 text-[#7d8590]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          <span className="font-semibold">portfolio</span>
        </div>

        {/* Files */}
        <nav className="mt-1">
          <a
            href="#"
            className={cn(
              "file-item text-sm",
              activeSection === "" && "active"
            )}
          >
            {fileIcons["#about"]}
            <span>README.md</span>
          </a>
          
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                "file-item text-sm",
                activeSection === link.href && "active"
              )}
            >
              {fileIcons[link.href]}
              <span>
                {link.label.toLowerCase()}
                {link.href === "#skills" && ".json"}
                {link.href === "#tech" && ".ts"}
                {link.href === "#projects" && "/"}
                {(link.href === "#about" || link.href === "#contact") && ".md"}
              </span>
            </a>
          ))}
        </nav>
      </div>

      {/* Bottom Section */}
      <div className="mt-auto border-t border-[#30363d] p-2">
        <button className="file-item w-full text-sm text-[#7d8590]">
          <Settings className="h-4 w-4" />
          <span>settings.json</span>
        </button>
      </div>
    </aside>
  );
}
