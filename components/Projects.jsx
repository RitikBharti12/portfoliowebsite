'use client';

import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

const projects = [
  {
    title: 'EazyTripy',
    label: 'Featured Project',
    description:
      'A smart travel itinerary planner that generates personalized schedules based on budget, weather, crowd levels, and route optimizations.',
    tech: ['React.js', 'Next.js', 'Node.js', 'Google Maps API', 'Weather API', 'PDF Generation'],
    live: 'https://easytripy.vercel.app',
    code: 'https://github.com/RitikBharti12',
    featured: true,
  },
  {
    title: 'Django Project',
    description:
      'A full-stack Django application deployed on Vercel with strong backend logic and polished frontend presentation.',
    tech: ['Django', 'Python', 'HTML', 'CSS', 'Vercel'],
    live: 'https://django-six-nu.vercel.app',
    code: 'https://github.com/RitikBharti12',
  },
  {
    title: 'Personal Portfolio Website',
    description:
      'A modern portfolio built to showcase projects, skills, and certifications with premium animations and a recruiter-friendly layout.',
    tech: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
    live: 'https://github.com/RitikBharti12',
    code: 'https://github.com/RitikBharti12',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 py-16">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
          className="mb-10 flex items-center gap-3 text-sm uppercase tracking-[0.25em] text-cyan-300"
        >
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-cyan-500/10 text-cyan-300">P</span>
          Projects
        </motion.div>
        <div className="grid gap-6">
          {projects.map((project, idx) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: idx * 0.1 }}
              className={`rounded-[1.75rem] border border-slate-800 bg-slate-950/95 p-8 shadow-panel ${project.featured ? 'lg:grid lg:grid-cols-[1.2fr_0.8fr] lg:gap-10' : ''}`}
            >
              <div className="space-y-5">
                <div className="flex items-center justify-between gap-3">
                  <span className="inline-flex rounded-full border border-slate-800 bg-slate-900/80 px-3 py-1 text-sm text-slate-300">
                    {project.label || 'Project'}
                  </span>
                  <span className="text-sm text-slate-400">{project.featured ? 'Featured' : 'Live build'}</span>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
                  <p className="mt-4 max-w-2xl text-slate-300">{project.description}</p>
                </div>
                <div className="flex flex-wrap gap-3">
                  {project.tech.map((item) => (
                    <span key={item} className="rounded-2xl border border-slate-800 bg-slate-900/95 px-3 py-2 text-sm text-slate-200">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-8 flex flex-col justify-between gap-5 lg:mt-0">
                <div className="rounded-[1.5rem] border border-slate-800 bg-slate-900/95 p-6 text-slate-300">
                  <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Impact highlights</p>
                  <ul className="mt-4 space-y-3 text-sm leading-7">
                    <li>Built responsive interfaces with clear, polished interactions.</li>
                    <li>Delivered practical functionality for real users and workflows.</li>
                    <li>Integrated external APIs to support live data experiences.</li>
                  </ul>
                </div>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-slate-200 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-300"
                  >
                    <FiExternalLink className="h-4 w-4" />
                    Live Demo
                  </a>
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/95 px-5 py-3 text-sm font-semibold text-slate-200 transition hover:border-slate-500 hover:bg-slate-800"
                  >
                    <FiGithub className="h-4 w-4" />
                    GitHub
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
