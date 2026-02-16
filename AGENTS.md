# Agent Instructions for Portfolio Codebase

This document provides guidelines for AI coding agents working in this Next.js 16 portfolio project with an IDE/code editor theme.

## Project Overview

- **Framework:** Next.js 16.1.6 (App Router) with React 19.2.3
- **Language:** TypeScript 5 (strict mode)
- **Styling:** Tailwind CSS 4 with custom IDE theme (GitHub Dark inspired)
- **Animation:** Framer Motion
- **UI Library:** @heroui/react (beta)
- **Icons:** lucide-react, react-icons/si
- **Font:** JetBrains Mono (monospace, IDE theme)

## ⚠️ MANDATORY: Best Practices & Standards

**ALL code changes MUST follow these best practices for both design and coding:**

### Design Best Practices
- **Maintain IDE aesthetic** - All UI must fit the code editor theme (line numbers, file tabs, terminal style)
- **Consistent color palette** - Use only theme colors: `#0d1117` (bg), `#e6edf3` (fg), `#30363d` (borders), `#4ade80` (accent)
- **Mobile-first responsive** - Design for mobile (390px) first, then enhance for desktop (1440px)
- **Accessible by default** - Include ARIA labels, keyboard navigation, focus states, respect `prefers-reduced-motion`
- **Semantic HTML** - Use proper tags: `<section>`, `<nav>`, `<article>`, `<button>` (not divs for buttons)
- **Consistent spacing** - Use Tailwind's spacing scale: `p-4`, `gap-4`, `my-6`, etc.
- **Typography** - JetBrains Mono everywhere (monospace), consistent font sizes
- **Animation restraint** - Use Framer Motion sparingly; animations should enhance, not distract
- **Visual hierarchy** - Clear distinction between headings, body text, and accents
- **Interactive feedback** - Hover states, focus rings, loading states for all interactive elements

### Coding Best Practices
- **TypeScript strict** - No `any` types, all functions typed, proper error handling
- **Single Responsibility** - One component = one purpose, extract complex logic to hooks
- **DRY principle** - Reuse existing components and utilities, don't duplicate code
- **Early returns** - Guard clauses to reduce nesting
- **Descriptive naming** - Variables and functions should explain what they do
- **Comments only when necessary** - Code should be self-documenting; explain "why" not "what"
- **No magic numbers** - Use named constants for values that aren't self-explanatory
- **Error boundaries** - Handle errors gracefully, provide fallbacks
- **Performance** - Memoize expensive calculations, lazy load below-fold content
- **Security** - Never expose secrets, sanitize user inputs, validate data

### Code Quality Checklist (Before Submitting)
- [ ] TypeScript compiles without errors (`npx tsc --noEmit`)
- [ ] ESLint passes (`npm run lint`)
- [ ] No console.logs left in production code
- [ ] Components have proper TypeScript types
- [ ] Responsive on mobile and desktop
- [ ] No accessibility violations (keyboard nav, ARIA labels)
- [ ] Follows existing file structure and naming conventions
- [ ] IDE theme is maintained throughout
- [ ] Code is formatted consistently with existing files

## Build, Lint, and Test Commands

```bash
# Development
npm run dev          # Start dev server at http://localhost:3000

# Production
npm run build        # Build for production (.next directory)
npm start            # Start production server (after build)

# Linting
npm run lint         # Run ESLint (Next.js config)
eslint              # Direct ESLint command

# Type Checking (manual)
npx tsc --noEmit    # Run TypeScript type checker

# Testing
# ⚠️ NO TEST FRAMEWORK CONFIGURED
# To add testing: install Jest or Vitest with React Testing Library
```

## Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Homepage (all sections)
│   ├── globals.css        # Global styles & CSS variables
│   └── sitemap.ts         # SEO sitemap
├── components/
│   ├── sections/          # Page sections (Hero, About, Skills, etc.)
│   └── ui/                # Reusable UI components
├── data/
│   └── portfolio.ts       # ⭐ SINGLE SOURCE OF TRUTH for all content
└── lib/
    ├── utils.ts           # Utility functions (cn helper)
    └── use-active-section.ts  # Custom hook
```

## Code Style Guidelines

### 1. Imports

**Always use path aliases:**
```typescript
import { Component } from "@/components/ui/component";
import { siteConfig } from "@/data/portfolio";
import { cn } from "@/lib/utils";
```

**Import order:**
```typescript
"use client"; // If needed (first line)

// 1. React/Next.js
import { useState, useEffect } from "react";
import type { Metadata } from "next";

// 2. Third-party libraries
import { motion } from "framer-motion";
import { SomeIcon } from "lucide-react";

// 3. Internal components (via @/)
import { Component } from "@/components/ui/component";
import { siteConfig } from "@/data/portfolio";
import { cn } from "@/lib/utils";
```

### 2. Component Structure

```typescript
"use client"; // Only for client components

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

// Type definitions first
type ComponentProps = {
  children?: React.ReactNode;
  className?: string;
  variant?: "default" | "accent";
};

// Component function
export function ComponentName({ children, className, variant = "default" }: ComponentProps) {
  // 1. Hooks first
  const [state, setState] = useState(false);
  
  // 2. Event handlers
  function handleClick() {
    setState(true);
  }
  
  // 3. Render
  return (
    <div className={cn("base-classes", className)}>
      {children}
    </div>
  );
}
```

### 3. Naming Conventions

- **Components:** PascalCase - `Hero`, `TabBar`, `CardSpotlight`
- **Files:** kebab-case - `hero.tsx`, `tab-bar.tsx`, `card-spotlight.tsx`
- **Directories:** lowercase, plural - `components/`, `sections/`, `ui/`
- **Variables/Functions:** camelCase - `handleClick`, `isActive`, `siteConfig`
- **Types:** PascalCase - `ComponentProps`, `Skill`, `Project`
- **Constants:** UPPER_SNAKE_CASE or camelCase - `MAX_ITEMS` or `navLinks`

### 4. TypeScript

- **Strict mode enabled** - all code must be type-safe
- **Use `type` over `interface`** (project convention)
- **Inline types for simple props:**
  ```typescript
  export function Component({ title, className }: { title: string; className?: string }) {
    // ...
  }
  ```
- **Separate types for complex props:**
  ```typescript
  type ComplexProps = {
    data: Skill[];
    onSelect: (id: string) => void;
    className?: string;
  };
  
  export function Component({ data, onSelect, className }: ComplexProps) {
    // ...
  }
  ```
- **Always include optional `className?: string`** for style override

### 5. Styling

**Use Tailwind CSS utilities with custom color values:**
```typescript
<div className="bg-[#0d1117] border-[#30363d] text-[#e6edf3]">
```

**Use `cn()` for conditional classes:**
```typescript
import { cn } from "@/lib/utils";

<div className={cn(
  "base-classes",
  isActive && "active-classes",
  variant === "accent" && "accent-classes",
  className
)}>
```

**IDE Theme - maintain consistency:**
- Background: `#0d1117` (editor-bg)
- Foreground: `#e6edf3` (editor-fg)
- Borders: `#30363d`
- Accent: `#4ade80` (green)
- Use syntax highlighting classes: `.syntax-keyword`, `.syntax-string`, `.syntax-number`

**Responsive design (mobile-first):**
```typescript
<div className="px-4 md:px-6 lg:px-8">
<div className="hidden lg:block">  // Desktop only
<div className="lg:hidden">        // Mobile only
```

### 6. Animations

**Use Framer Motion for scroll animations:**
```typescript
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, staggerChildren: 0.1 }
  }
};

<motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, margin: "-100px" }}
  variants={containerVariants}
>
  {/* Content */}
</motion.div>
```

### 7. Error Handling

- **Validate props** with TypeScript types
- **Use optional chaining** for potentially undefined values: `data?.field`
- **Provide fallbacks:** `const value = prop ?? defaultValue`
- **Handle errors in event handlers:**
  ```typescript
  async function handleSubmit() {
    try {
      await submitData();
    } catch (error) {
      console.error("Submission failed:", error);
    }
  }
  ```

### 8. Client vs Server Components

- **Server Components (default):** No `"use client"` directive
  - Use for static content, data fetching, layout
  - Cannot use hooks, browser APIs, event handlers
  
- **Client Components:** Add `"use client"` at top
  - Required for: hooks, state, effects, event handlers, browser APIs
  - Examples: `ThemeToggle`, `ScrollProgress`, `MobileHeader`

### 9. Content Updates

**ALL content lives in `src/data/portfolio.ts`:**
```typescript
import { siteConfig, navLinks, skills, projects } from "@/data/portfolio";
```

**To update content:**
1. Edit `src/data/portfolio.ts`
2. Add/modify data in the exported objects
3. Components automatically reflect changes

### 10. Accessibility

- **Use semantic HTML:** `<section>`, `<nav>`, `<header>`, `<footer>`
- **Include ARIA labels:** `aria-label`, `aria-labelledby`
- **Keyboard navigation:** Support Tab, Enter, Escape
- **Focus styles:** Use `focus-visible:ring-2 focus-visible:ring-[#4ade80]`
- **Skip to content link** already implemented
- **Respect motion preferences:** `prefers-reduced-motion` in CSS

## Common Patterns

### Section Component
```typescript
export function SectionName() {
  return (
    <section id="section-name" className="relative px-6 py-16">
      {/* Line numbers for IDE theme (desktop only) */}
      <div className="absolute left-0 top-0 hidden lg:flex flex-col">
        {Array.from({ length: 20 }, (_, i) => (
          <span key={i} className="text-[#6e7681] text-xs font-mono w-12 text-right">
            {i + 1}
          </span>
        ))}
      </div>
      
      <div className="mx-auto max-w-5xl lg:ml-20">
        {/* Content */}
      </div>
    </section>
  );
}
```

### Custom Hook Usage
```typescript
import { useActiveSection } from "@/lib/use-active-section";

export function Navbar() {
  const activeSection = useActiveSection(["home", "about", "skills"]);
  // activeSection contains the currently visible section ID
}
```

## Important Notes

- **No Prettier configured** - rely on editor settings
- **No tests** - framework not set up yet
- **IDE theme is core** - maintain file explorer, tabs, line numbers aesthetic
- **Single-page application** - all sections on one page (`app/page.tsx`)
- **SEO optimized** - metadata in `layout.tsx`, sitemap, JSON-LD
- **Vercel-ready** - configured for deployment

## When Making Changes

1. **Run type check:** `npx tsc --noEmit` before committing
2. **Run lint:** `npm run lint` to catch issues
3. **Test locally:** `npm run dev` and verify in browser
4. **Build test:** `npm run build` to ensure production build works
5. **Check responsive:** Test mobile (390px) and desktop (1440px) viewports
6. **Maintain IDE theme:** Keep editor aesthetic consistent

## Questions?

Refer to existing code for patterns. Key files to reference:
- `src/components/sections/hero.tsx` - Complex animation example
- `src/components/ui/tab-bar.tsx` - UI component pattern
- `src/data/portfolio.ts` - Content structure
- `src/app/globals.css` - Styling and theme variables
