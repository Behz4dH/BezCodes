import { cn } from "@/lib/utils";
import { type ReactNode } from "react";

type SectionProps = {
  id?: string;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
};

export function Section({
  id,
  children,
  className,
  containerClassName,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn("relative py-24 md:py-32", className)}
    >
      <div
        className={cn(
          "mx-auto max-w-6xl px-6 md:px-8",
          containerClassName
        )}
      >
        {children}
      </div>
    </section>
  );
}

export function SectionHeader({
  label,
  title,
  description,
  className,
}: {
  label?: string;
  title: string;
  description?: string;
  className?: string;
}) {
  return (
    <div className={cn("mb-16 max-w-2xl", className)}>
      {label && (
        <p className="mb-3 text-sm font-medium uppercase tracking-widest text-accent">
          {label}
        </p>
      )}
      <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg leading-relaxed text-muted">
          {description}
        </p>
      )}
    </div>
  );
}
