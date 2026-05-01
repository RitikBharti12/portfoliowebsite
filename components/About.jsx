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
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">Professional snapshot</h2>
          <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
            Ritik is an aspiring software engineer and B.Tech CSE student focused on building scalable,
            responsive, and real-world software solutions. He has hands-on experience with frontend,
            backend, databases, cloud deployment, and modern development tools. His work combines
            thoughtful interface design with efficient application architecture to deliver polished
            digital products.
          </p>
        </div>
      </div>
    </section>
  );
}
