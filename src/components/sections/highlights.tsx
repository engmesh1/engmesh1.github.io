"use client";

import { Shield, Gauge, Wand2 } from "lucide-react";
import { motion, fadeUp, stagger } from "@/components/motion";

const items = [
  { icon: Shield, title: "Security-first thinking", desc: "المنطق الأمني جزء من التصميم: إدخال، تطبيع، اكتشاف، تقرير." },
  { icon: Gauge, title: "Performance by default", desc: "واجهة سريعة، تحميل ذكي، وترتيب واضح للمحتوى." },
  { icon: Wand2, title: "Polish & consistency", desc: "تفاصيل صغيرة تصنع انطباع كبير: تباعد، ألوان، حركة، نص." }
];

export function Highlights() {
  return (
    <section id="highlights" className="scroll-mt-24">
      <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }}>
        <motion.h2 variants={fadeUp} className="h2">Why this portfolio</motion.h2>
        <motion.p variants={fadeUp} className="p-muted mt-2 max-w-2xl">
          هذا موقع يثبت “قوة الواجهة” عملياً: تجربة تفاعلية، عناصر واضحة، وهيكلية قابلة للتوسّع.
        </motion.p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          {items.map((i) => (
            <motion.div key={i.title} variants={fadeUp} className="card p-6">
              <i.icon className="h-6 w-6" />
              <div className="mt-4 font-semibold">{i.title}</div>
              <div className="mt-2 text-sm text-fg/70">{i.desc}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
