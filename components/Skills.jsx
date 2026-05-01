'use client';

import { motion } from 'framer-motion';
import { FiCodesandbox, FiLayers, FiDatabase, FiTool, FiCloud } from 'react-icons/fi';

const categories = [
  {
    title: 'Programming',
    icon: FiCodesandbox,
    skills: ['C++', 'JavaScript', 'Python'],
  },
  {
    title: 'Frontend',
    icon: FiLayers,
    skills: ['React.js', 'Next.js', 'HTML5', 'CSS3', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    title: 'Backend',
    icon: FiCloud,
    skills: ['Node.js', 'Express.js'],
  },
  {
    title: 'Databases',
    icon: FiDatabase,
    skills: ['MongoDB', 'MySQL'],
  },
  {
    title: 'Cloud & DevOps',
    icon: FiCloud,
    skills: ['AWS', 'Firebase', 'Docker', 'Vercel'],
  },
  {
    title: 'Tools',
    icon: FiTool,
    skills: ['Git', 'GitHub'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 py-16">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
          className="mb-10 flex items-center gap-3 text-sm uppercase tracking-[0.25em] text-cyan-300"
        >
          <FiCodesandbox className="h-5 w-5" />
          Skills
        </motion.div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                whileHover={{ y: -6 }}
                className="glass-card rounded-[1.75rem] border border-white/10 p-6 transition"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-3xl bg-cyan-500/10 text-cyan-300">
                    <Icon className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                    <p className="text-sm text-slate-400">Modern tools and product-ready skills</p>
                  </div>
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-2xl border border-white/10 bg-slate-950/80 px-3 py-2 text-sm text-slate-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
