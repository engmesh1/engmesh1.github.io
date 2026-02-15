"use client";

import { useMemo, useState } from "react";
import { ExternalLink, Layers } from "lucide-react";
import type { Project } from "@/lib/projects";
import { cn } from "@/lib/utils";
import { motion } from "@/components/motion";
import { ProjectModal } from "@/components/project-modal";

export function ProjectCard({ project }: { project: Project }) {
  const [open, setOpen] = useState(false);

  const badge = useMemo(() => {
    const map: Record<Project["category"], string> = {
      Security: "border-fg/20 bg-muted",
      Web: "border-fg/20 bg-muted",
      Data: "border-fg/20 bg-muted"
    };
    return map[project.category];
  }, [project.category]);

  return (
    <>
      <motion.button
        type="button"
        onClick={() => setOpen(true)}
        whileHover={{ y: -2 }}
        className={cn("card text-left p-6 hover:bg-muted transition", project.featured && "shadow-glow")}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className={cn("inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs", badge)}>
              <Layers className="h-3.5 w-3.5" />{project.category}
            </div>
            <div className="mt-3 text-lg font-semibold">{project.title}</div>
            <div className="mt-2 text-sm text-fg/70">{project.tagline}</div>
          </div>

          <div className="btn">Details <ExternalLink className="h-4 w-4" /></div>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.stack.slice(0, 6).map((s) => (<span key={s} className="chip text-xs">{s}</span>))}
        </div>
      </motion.button>

      <ProjectModal open={open} onClose={() => setOpen(false)} project={project} />
    </>
  );
}
