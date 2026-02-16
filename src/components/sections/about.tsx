"use client";

import { aboutData } from "@/data/portfolio";
import { Section, SectionHeader } from "@/components/ui/section";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/scroll-reveal";

export function About() {
  return (
    <Section id="about">
      <ScrollReveal>
        <SectionHeader
          label="About"
          title={aboutData.headline}
        />
      </ScrollReveal>

      <div className="grid gap-16 lg:grid-cols-5">
        {/* Text content */}
        <div className="lg:col-span-3">
          <StaggerContainer className="space-y-6">
            {aboutData.paragraphs.map((paragraph, i) => (
              <StaggerItem key={i}>
                <p className="text-base leading-relaxed text-muted md:text-lg">
                  {paragraph}
                </p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        {/* Stats */}
        <div className="lg:col-span-2">
          <StaggerContainer className="grid grid-cols-2 gap-6">
            {aboutData.stats.map((stat) => (
              <StaggerItem key={stat.label}>
                <div className="rounded-2xl border border-border/50 bg-surface/50 p-6">
                  <p className="text-3xl font-extrabold tracking-tight text-foreground md:text-4xl" style={{ fontFeatureSettings: '"tnum" 1' }}>
                    {stat.value}
                  </p>
                  <p className="mt-1 text-sm text-muted">{stat.label}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </Section>
  );
}
