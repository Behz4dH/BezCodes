"use client";

import { useEffect, useState } from "react";
import { GitBranch, Radio } from "lucide-react";

export function StatusBar() {
  const [time, setTime] = useState("");
  const [cursorPos, setCursorPos] = useState({ line: 1, col: 1 });

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString("en-US", { hour12: false, hour: "2-digit", minute: "2-digit" }));
    };
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = () => {
      // Simulate cursor position based on scroll
      const scrollPercent = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
      const line = Math.floor(scrollPercent * 100) + 1;
      setCursorPos({ line: Math.min(line, 999), col: 1 });
    };

    window.addEventListener("scroll", handleMouseMove);
    handleMouseMove();
    return () => {
      window.removeEventListener("scroll", handleMouseMove);
    };
  }, []);

  return (
    <footer className="status-bar fixed bottom-0 left-0 right-0 z-50 lg:left-60">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1.5">
          <GitBranch className="h-3.5 w-3.5" />
          <span>main</span>
        </div>
        <div className="hidden items-center gap-1.5 sm:flex">
          <Radio className="h-3.5 w-3.5 text-[#4ade80]" />
          <span>0 errors, 0 warnings</span>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <span className="hidden sm:inline">UTF-8</span>
        <span className="hidden sm:inline">TypeScript</span>
        <span className="hidden sm:inline">{time}</span>
        <span>Ln {cursorPos.line}, Col {cursorPos.col}</span>
      </div>
    </footer>
  );
}
