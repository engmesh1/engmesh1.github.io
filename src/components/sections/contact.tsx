"use client";

import { Mail, ArrowRight } from "lucide-react";
import { motion, fadeUp, stagger } from "@/components/motion";
import { useContent } from "@/components/content-provider";

export function Contact() {
  const { content } = useContent();
  const profile = content.profile;
  return (
    <section id="contact" className="scroll-mt-24">
      <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }}>
        <motion.h2 variants={fadeUp} className="h2">Contact</motion.h2>
        <motion.p variants={fadeUp} className="p-muted mt-2 max-w-2xl">لو تبغى تدريب تعاوني (Co-op) أو تعاون بمشروع، تواصل معي.</motion.p>

        <motion.div variants={fadeUp} className="mt-6 card p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <div className="text-sm text-fg/60">Email</div>
            <div className="mt-1 font-semibold">{profile.links.email}</div>
          </div>
          <a className="btn btn-primary w-fit" href={`mailto:${profile.links.email}`}>
            Send Email <Mail className="h-4 w-4" /> <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
