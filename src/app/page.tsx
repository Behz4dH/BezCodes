import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { TechStack } from "@/components/sections/tech-stack";
import { Projects } from "@/components/sections/projects";
import { Contact } from "@/components/sections/contact";
import { Sidebar } from "@/components/ui/sidebar";
import { TabBar } from "@/components/ui/tab-bar";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { StatusBar } from "@/components/ui/status-bar";
import { ScrollProgress } from "@/components/ui/scroll-progress";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0d1117]">
      <ScrollProgress />
      <Sidebar />
      
      <div className="flex min-h-screen flex-col lg:ml-60">
        <TabBar />
        <Breadcrumbs />
        
        <main id="main-content" className="flex-1 pb-12">
          <Hero />
          <About />
          <Skills />
          <TechStack />
          <Projects />
          <Contact />
        </main>
        
        <StatusBar />
      </div>
    </div>
  );
}
