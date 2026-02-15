"use client";

import { motion, fadeUp, stagger } from "@/components/motion";
import { skillGroups } from "@/lib/skills";

function Bar({ value }: { value: number }) {
  return (
    <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
      <div className="h-full rounded-full bg-accent" style={{ width: `${value}%` }} />
    </div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-24">
      <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }}>
        <motion.h2 variants={fadeUp} className="h2">Skills</motion.h2>
        <motion.p variants={fadeUp} className="p-muted mt-2 max-w-2xl">عرض بصري سريع للمستوى. تقدر تعدّل الأرقام حسب واقعك.</motion.p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          {skillGroups.map((g) => (
            <motion.div key={g.title} variants={fadeUp} className="card p-6">
              <div className="font-semibold">{g.title}</div>
              <div className="mt-4 space-y-4">
                {g.items.map((s) => (
                  <div key={s.name}>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-fg/80">{s.name}</span>
                      <span className="text-fg/60">{s.level}%</span>
                    </div>
                    <div className="mt-2"><Bar value={s.level} /></div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
