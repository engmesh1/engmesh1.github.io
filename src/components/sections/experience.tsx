"use client";

import { motion, fadeUp, stagger } from "@/components/motion";
import { experience } from "@/lib/experience";

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-24">
      <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }}>
        <motion.h2 variants={fadeUp} className="h2">Experience</motion.h2>
        <motion.p variants={fadeUp} className="p-muted mt-2 max-w-2xl">أعرض خبرتي التنفيذية عبر مشاريعي وتوثيقي، حتى قبل الوظيفة الرسمية.</motion.p>

        <div className="mt-6 grid gap-4">
          {experience.map((e) => (
            <motion.div key={e.title} variants={fadeUp} className="card p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <div className="font-semibold">{e.title}</div>
                <div className="text-sm text-fg/60">{e.org} • {e.time}</div>
              </div>
              <ul className="mt-4 list-disc pl-5 text-sm text-fg/75 space-y-1">
                {e.points.map((p) => (<li key={p}>{p}</li>))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
