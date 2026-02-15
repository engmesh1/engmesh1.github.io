"use client";

import { useMemo, useState } from "react";
import { motion, fadeUp, stagger } from "@/components/motion";
import { type Project } from "@/lib/projects";
import { useContent } from "@/components/content-provider";
import { ProjectCard } from "@/components/project-card";

const filters: Array<Project["category"] | "All"> = ["All", "Web", "Security", "Data"];

export function ProjectsGridPage() {
  const [active, setActive] = useState<(typeof filters)[number]>("All");
  const { content } = useContent();

  const list = useMemo(() => {
    if (active === "All") return content.projects;
    return content.projects.filter((p) => p.category === active);
  }, [active, content.projects]);

  return (
    <motion.div variants={stagger} initial="hidden" animate="show" className="space-y-6">
      <motion.div variants={fadeUp}>
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">Projects</h1>
        <p className="p-muted mt-2 max-w-2xl">{content.ui.projectsPageSubtitle}</p>
      </motion.div>

      <motion.div variants={fadeUp} className="flex flex-wrap gap-2">
        {filters.map((f) => (
          <button key={f} className={f === active ? "btn btn-primary" : "btn"} onClick={() => setActive(f)} type="button">
            {f}
          </button>
        ))}
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {list.map((p) => (
          <motion.div key={p.slug} variants={fadeUp}><ProjectCard project={p} /></motion.div>
        ))}
      </div>
    </motion.div>
  );
}
