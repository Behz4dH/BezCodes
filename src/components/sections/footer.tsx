import { siteConfig } from "@/data/portfolio";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/50 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-muted-foreground md:flex-row md:px-8">
        <p>
          &copy; {year} {siteConfig.name}. All rights reserved.
        </p>
        <p className="font-mono text-xs">
          Built with Next.js, Tailwind CSS & care.
        </p>
      </div>
    </footer>
  );
}
