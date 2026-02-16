"use client";

import { navLinks, siteConfig } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import { useActiveSection } from "@/lib/use-active-section";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();
  const activeSection = useActiveSection();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "glass border-b border-border/50 shadow-sm"
          : "bg-transparent"
      )}
    >
      <nav aria-label="Main navigation" className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-8">
        {/* Logo */}
        <a
          href="#"
          className="font-mono text-sm font-bold tracking-tight text-foreground transition-colors hover:text-accent"
        >
          {siteConfig.name.split(" ")[0].toLowerCase()}
          <span className="text-accent">.</span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={cn(
                  "group relative text-sm font-medium transition-colors duration-200 hover:text-foreground",
                  activeSection === link.href ? "text-foreground" : "text-muted"
                )}
              >
                {link.label}
                <span
                  className={cn(
                    "absolute -bottom-1 left-0 h-px bg-accent transition-all duration-300",
                    activeSection === link.href ? "w-full" : "w-0 group-hover:w-full"
                  )}
                />
              </a>
            </li>
          ))}
        </ul>

        {/* Right side: theme toggle + CTA */}
        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <a
            href="#contact"
            className="rounded-full bg-foreground px-5 py-2 text-sm font-medium text-background transition-all duration-200 hover:bg-accent hover:text-white active:scale-[0.97] active:transition-none"
          >
            Get in touch
          </a>
        </div>

        {/* Mobile: theme toggle + hamburger */}
        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex flex-col gap-1.5"
            aria-label="Toggle navigation"
            aria-expanded={mobileOpen}
        >
          <span
            className={cn(
              "h-0.5 w-6 bg-foreground transition-all duration-200",
              mobileOpen && "translate-y-2 rotate-45"
            )}
          />
          <span
            className={cn(
              "h-0.5 w-6 bg-foreground transition-all duration-200",
              mobileOpen && "opacity-0"
            )}
          />
          <span
            className={cn(
              "h-0.5 w-6 bg-foreground transition-all duration-200",
              mobileOpen && "-translate-y-2 -rotate-45"
            )}
          />
        </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <motion.div
        initial={false}
        animate={
          mobileOpen
            ? { height: "auto", opacity: 1 }
            : { height: 0, opacity: 0 }
        }
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="overflow-hidden border-b border-border/50 md:hidden"
      >
        <div className="glass px-6 pb-6 pt-2">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-base font-medium text-muted transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="inline-flex rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-all hover:bg-accent hover:text-white active:scale-[0.97] active:transition-none"
              >
                Get in touch
              </a>
            </li>
          </ul>
        </div>
      </motion.div>
    </motion.header>
  );
}
