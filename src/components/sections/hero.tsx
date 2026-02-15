"use client";

import Link from "next/link";
import { ArrowRight, Download, Sparkles } from "lucide-react";
import { Aurora } from "@/components/aurora";
import { motion, fadeUp, stagger } from "@/components/motion";
import { useContent } from "@/components/content-provider";

export function Hero() {
  const { content } = useContent();
  const profile = content.profile;
  return (
    <section className="relative">
      <Aurora />
      <div className="container-px pt-14 sm:pt-20 pb-12">
        <motion.div variants={stagger} initial="hidden" animate="show" className="grid gap-8">
          <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-3">
            <span className="chip"><Sparkles className="h-4 w-4" />Interactive portfolio • Web + Security</span>
            <span className="chip">{profile.location}</span>
          </motion.div>

          <motion.h1 variants={fadeUp} className="text-4xl sm:text-6xl font-semibold tracking-tight leading-[1.05]">
            {profile.heroTitle ?? "صفحتي المتواضعة"}
          </motion.h1>

          <motion.p variants={fadeUp} className="max-w-2xl text-lg text-fg/70">
            {profile.heroSubtitle ?? profile.summary}
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
            <Link href="/projects" className="btn btn-primary">استعرض المشاريع <ArrowRight className="h-4 w-4" /></Link>
            <a className="btn" href={profile.links.linktree} target="_blank" rel="noreferrer">روابط التواصل <ArrowRight className="h-4 w-4" /></a>
            <a className="btn" href={profile.links.cv ?? "#"} onClick={(e) => (profile.links.cv ? undefined : e.preventDefault())}>
              CV (ضع رابط PDF هنا) <Download className="h-4 w-4" />
            </a>
          </motion.div>

          <motion.div variants={fadeUp} className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {profile.highlights.map((h) => (
              <div key={h.label} className="card p-5 shadow-glow">
                <div className="text-sm text-fg/60">{h.label}</div>
                <div className="mt-2 font-semibold">{h.value}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
