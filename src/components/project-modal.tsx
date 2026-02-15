"use client";

import { useEffect } from "react";
import { X } from "lucide-react";
import type { Project } from "@/lib/projects";
import { motion } from "@/components/motion";
import { CommentsWidget } from "@/components/comments-widget";

export function ProjectModal({ open, onClose, project }: { open: boolean; onClose: () => void; project: Project; }) {
  useEffect(() => {
    function onKey(e: KeyboardEvent) { if (e.key === "Escape") onClose(); }
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/55" onClick={onClose} />
      <motion.div
        initial={{ opacity: 0, y: 18, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        className="absolute left-1/2 top-1/2 w-[min(720px,92vw)] -translate-x-1/2 -translate-y-1/2 card p-6"
        role="dialog"
        aria-modal="true"
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="text-sm text-fg/60">{project.category}</div>
            <div className="mt-1 text-2xl font-semibold">{project.title}</div>
            <div className="mt-2 text-fg/70">{project.tagline}</div>
          </div>
          <button type="button" className="btn" onClick={onClose} aria-label="Close"><X className="h-4 w-4" /></button>
        </div>

        <div className="mt-6 grid gap-6">
          <div>
            <div className="text-sm font-semibold">Impact</div>
            <ul className="mt-2 list-disc pl-5 text-sm text-fg/75 space-y-1">
              {project.impact.map((p) => (<li key={p}>{p}</li>))}
            </ul>
          </div>

          <div>
            <div className="text-sm font-semibold">Stack</div>
            <div className="mt-2 flex flex-wrap gap-2">
              {project.stack.map((s) => (<span key={s} className="chip text-xs">{s}</span>))}
            </div>
          </div>

          <div>
            <div className="text-sm font-semibold">Links</div>
            <div className="mt-2 flex flex-wrap gap-2">
              {project.links.map((l) => (
                <a key={l.href} className="btn" href={l.href} target="_blank" rel="noreferrer">{l.label}</a>
              ))}
            </div>
          </div>

          <CommentsWidget projectSlug={project.slug} />
        </div>
      </motion.div>
    </div>
  );
}
