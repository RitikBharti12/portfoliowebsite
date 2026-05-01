'use client';

import { motion } from 'framer-motion';
import { FiBookOpen } from 'react-icons/fi';

const schools = [
  {
    name: 'Dronacharya Group of Institutions, Greater Noida',
    role: 'B.Tech in Computer Science Engineering',
    duration: 'Nov 2022 – Aug 2026',
    detail: 'SGPA: 7',
  },
  {
    name: 'M.K. DAV Public School, Daltonganj',
    role: '12th CBSE PCM',
    duration: 'Apr 2021 – Mar 2022',
    detail: '',
  },
];

export default function Education() {
  return (
    <section id="education" className="scroll-mt-24 py-16">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
          className="mb-10 flex items-center gap-3 text-sm uppercase tracking-[0.25em] text-cyan-300"
        >
          <FiBookOpen className="h-5 w-5" />
          Education
        </motion.div>
        <div className="grid gap-6 md:grid-cols-2">
          {schools.map((item) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45 }}
              className="glass-card rounded-[2rem] border border-white/10 p-7"
            >
              <h3 className="text-xl font-semibold text-white">{item.name}</h3>
              <p className="mt-3 text-sm text-cyan-200">{item.role}</p>
              <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-slate-400">
                <span className="rounded-full bg-white/5 px-3 py-2">{item.duration}</span>
                {item.detail ? <span className="rounded-full bg-white/5 px-3 py-2">{item.detail}</span> : null}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
