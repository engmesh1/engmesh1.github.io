"use client";

import { useContent } from "@/components/content-provider";

export function Footer() {
  const { content } = useContent();
  const profile = content.profile;
  return (
    <footer className="border-t border-border bg-bg">
      <div className="container-px py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <div className="font-semibold">{profile.name}</div>
          <div className="text-sm text-fg/60">{profile.role}</div>
        </div>
        <div className="text-sm text-fg/60">© {new Date().getFullYear()} {profile.handle}. Built with Next.js.</div>
      </div>
    </footer>
  );
}
