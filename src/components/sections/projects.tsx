"use client";

import Link from "next/link";
import { motion, fadeUp, stagger } from "@/components/motion";
import { useContent } from "@/components/content-provider";
import { ProjectCard } from "@/components/project-card";

export function Projects() {
  const { content } = useContent();
  const featured = content.projects.filter((p) => p.featured).slice(0, 3);

  return (
    <section id="projects" className="scroll-mt-24">
      <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }}>
        <motion.div variants={fadeUp} className="flex items-end justify-between gap-4">
          <div>
            <h2 className="h2">Projects</h2>
            <p className="p-muted mt-2 max-w-2xl">{content.ui.projectsSubtitle}</p>
          </div>
          <Link className="btn w-fit" href="/projects">View all</Link>
        </motion.div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          {featured.map((p) => (
            <motion.div key={p.slug} variants={fadeUp}><ProjectCard project={p} /></motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
