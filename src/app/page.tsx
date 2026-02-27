import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { CubeSeparator } from "@/components/sections/cube-separator";
import { TechStack } from "@/components/sections/tech-stack";
import { Projects } from "@/components/sections/projects";
import { Contact } from "@/components/sections/contact";
import { Sidebar } from "@/components/ui/sidebar";
import { TabBar } from "@/components/ui/tab-bar";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { StatusBar } from "@/components/ui/status-bar";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { MobileHeader } from "@/components/ui/mobile-header";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0d1117]">
      <ScrollProgress />
      <Sidebar />
      
      {/* Mobile Header - sticky with tabs and breadcrumbs */}
      <MobileHeader />
      
      <div className="flex min-h-screen flex-col lg:ml-60">
        {/* Desktop navigation - sticky */}
        <div className="sticky top-0 z-40 hidden lg:block">
          <TabBar />
          <Breadcrumbs />
        </div>
        
        <main id="main-content" className="flex-1 pb-12 pt-0 lg:pt-0">
          <Hero />
          <About />
          <Skills />
          <CubeSeparator />
          <TechStack />
          <Projects />
          <Contact />
        </main>
        
        <StatusBar />
      </div>
    </div>
  );
}
