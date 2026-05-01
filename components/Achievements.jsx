'use client';

import { motion } from 'framer-motion';
import { FiTrendingUp } from 'react-icons/fi';

const achievements = [
  'Built full-stack applications using React, Node.js, and modern databases to deliver data-driven user experiences.',
  'Developed invoice automation workflows that reduced manual processing time by 70%.',
  'Created responsive user interfaces optimized for mobile and desktop users across product launches.',
  'Integrated APIs for real-time data, analytics, and dynamic user interactions.',
];

export default function Achievements() {
  return (
    <section id="achievements" className="scroll-mt-24 py-16">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
          className="mb-10 flex items-center gap-3 text-sm uppercase tracking-[0.25em] text-cyan-300"
        >
          <FiTrendingUp className="h-5 w-5" />
          Impact & Achievements
        </motion.div>
        <div className="glass-card rounded-[2rem] border border-white/10 p-8 shadow-panel">
          <div className="grid gap-6 lg:grid-cols-2">
            {achievements.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: 0.08 * index }}
                className="rounded-3xl border border-white/10 bg-slate-950/80 p-6"
              >
                <span className="mb-4 inline-flex rounded-full bg-cyan-500/10 px-3 py-1 text-xs uppercase tracking-[0.3em] text-cyan-200">
                  #{index + 1}
                </span>
                <p className="text-base leading-7 text-slate-300">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
