"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Github, Linkedin, Mail, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { useContent } from "@/components/content-provider";

const nav = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/edit", label: "Edit" }
];

export function Navbar() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const { content } = useContent();
  const profile = content.profile;

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/80 backdrop-blur">
      <div className="container-px flex h-16 items-center justify-between">
        <Link href="/" className="font-semibold tracking-tight">
          <span className="text-fg">{profile.name}</span>
          <span className="text-fg/50"> • </span>
          <span className="text-fg/70">{profile.role}</span>
        </Link>

        <nav className="hidden sm:flex items-center gap-2">
          {nav.map((i) => (
            <Link key={i.href} href={i.href} className={cn("btn", pathname === i.href && "bg-muted")}>
              {i.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a className="btn" href={profile.links.github} target="_blank" rel="noreferrer"><Github className="h-4 w-4" /><span className="hidden md:inline">GitHub</span></a>
          <a className="btn" href={profile.links.linkedin} target="_blank" rel="noreferrer"><Linkedin className="h-4 w-4" /><span className="hidden md:inline">LinkedIn</span></a>
          <a className="btn" href={`mailto:${profile.links.email}`}><Mail className="h-4 w-4" /><span className="hidden md:inline">Email</span></a>

          <button type="button" className="btn" aria-label="Toggle theme" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            <span className="hidden md:inline">Theme</span>
          </button>
        </div>
      </div>
    </header>
  );
}
