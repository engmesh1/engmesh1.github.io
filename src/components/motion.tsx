"use client";
import { motion, type Variants } from "framer-motion";
export const fadeUp: Variants = { hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0 } };
export const stagger: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };
export { motion };
