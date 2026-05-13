'use client';

import { motion } from 'framer-motion';
import { FiAward } from 'react-icons/fi';

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 py-16">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
          className="mb-10 flex items-center gap-3 text-sm uppercase tracking-[0.25em] text-cyan-300"
        >
          <FiAward className="h-5 w-5" />
          About
        </motion.div>
        <div className="glass-card border border-white/10 p-8 shadow-panel">
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">About Me</h2>
          <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
            I&apos;m Ritik Kumar Bharti, a final-year B.Tech CSE student who enjoys full-stack web
            development and building real-world projects that solve practical problems. I like working
            with modern technologies to create clean, responsive, and user-friendly applications,
            including EazyTripy, my AI travel planner project.
          </p>
        </div>
      </div>
    </section>
  );
}
