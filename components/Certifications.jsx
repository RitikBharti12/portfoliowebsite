'use client';

import { motion } from 'framer-motion';
import { FiCheckCircle } from 'react-icons/fi';

const certificates = [
  {
    title: 'HTML - CSS',
    provider: 'OpenWeaver',
    date: 'Mar 2025',
  },
  {
    title: 'Cybersecurity',
    provider: 'Cisco',
    date: 'Feb 2024',
  },
  {
    title: 'C Programming Certification',
    provider: 'IIT Bombay',
    date: 'Jan 2024',
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="scroll-mt-24 py-16">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
          className="mb-10 flex items-center gap-3 text-sm uppercase tracking-[0.25em] text-cyan-300"
        >
          <FiCheckCircle className="h-5 w-5" />
          Certifications
        </motion.div>
        <div className="grid gap-6 md:grid-cols-3">
          {certificates.map((cert) => (
            <motion.div
              key={cert.title}
              whileHover={{ y: -6 }}
              className="glass-card rounded-[2rem] border border-white/10 p-6"
            >
              <div className="flex items-center justify-between gap-3">
                <div>
                  <h3 className="text-xl font-semibold text-white">{cert.title}</h3>
                  <p className="mt-1 text-sm text-slate-400">{cert.provider}</p>
                </div>
                <div className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs uppercase tracking-[0.25em] text-cyan-200">
                  {cert.date}
                </div>
              </div>
              <p className="mt-6 text-sm leading-7 text-slate-300">
                Verified training and recognized skill development for modern web and cybersecurity workflows.
              </p>
              <button className="mt-8 inline-flex items-center justify-center rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-3 text-sm font-semibold text-cyan-200 transition hover:bg-cyan-500/15">
                View Certificate
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
