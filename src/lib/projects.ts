export type Project = {
  slug: string;
  title: string;
  tagline: string;
  stack: string[];
  impact: string[];
  links: { label: string; href: string }[];
  featured?: boolean;
  category: "Security" | "Web" | "Data";
};

export const projects: Project[] = [
  {
    slug: "mini-siem-dashboard",
    title: "Mini SIEM Dashboard",
    tagline: "Ingest logs, normalize events, and query detections with a clean API.",
    category: "Security",
    stack: ["FastAPI", "SQLite", "Docker", "Pytest"],
    impact: ["Log ingestion + normalization pipeline", "Query endpoint for filtered detections", "CI-ready tests"],
    links: [{ label: "Repository", href: "https://github.com/engmesh1/mini-siem-dashboard" }],
    featured: true
  },
  {
    slug: "threat-intel-lab",
    title: "Threat Intel Lab",
    tagline: "Parse JSONL logs and generate a timeline + alerts + Markdown report.",
    category: "Data",
    stack: ["Python", "YAML Rules", "Pytest", "Ruff"],
    impact: ["Detections via rule engine (YAML)", "Timeline reconstruction", "Auto-generated report output"],
    links: [{ label: "Repository", href: "https://github.com/engmesh1/threat-intel-lab" }],
    featured: true
  },
  {
    slug: "portfolio",
    title: "Interactive Portfolio",
    tagline: "A high-polish portfolio with animations, filtering, and project modals.",
    category: "Web",
    stack: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    impact: ["Dark/light theme persisted", "Project filtering + modal details", "SEO + OpenGraph metadata"],
    links: [{ label: "Live (Vercel)", href: "https://example.com" }],
    featured: true
  }
];
