import { Hero } from "@/components/sections/hero";
import { Highlights } from "@/components/sections/highlights";
import { Projects } from "@/components/sections/projects";
import { Skills } from "@/components/sections/skills";
import { Experience } from "@/components/sections/experience";
import { Contact } from "@/components/sections/contact";

export default function Page() {
  return (
    <div className="min-h-screen">
      <Hero />
      <div className="container-px space-y-20 pb-24">
        <Highlights />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </div>
    </div>
  );
}
