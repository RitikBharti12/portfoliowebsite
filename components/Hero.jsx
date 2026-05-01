'use client';

import { motion } from 'framer-motion';
import { FiArrowRight, FiDownload } from 'react-icons/fi';

const techHighlights = [
  'React.js',
  'Next.js',
  'Node.js',
  'Tailwind',
  'AWS / Vercel',
];

export default function Hero() {
  return (
    <section id="home" className="relative pt-8 lg:pt-10">
      <div className="grid gap-10 lg:grid-cols-[1.2fr_0.9fr] lg:items-center">
        <div className="space-y-8">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-sm font-medium uppercase tracking-[0.3em] text-slate-400"
          >
            Full Stack Developer
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-5"
          >
            <h1 className="max-w-3xl text-5xl font-semibold leading-tight tracking-[-0.04em] text-white sm:text-6xl">
              Hi, I’m Ritik Kumar Bharti.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-slate-300">
              I build scalable web applications and solve real product problems with thoughtful UI,
              clean architecture, and reliable backend systems.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-4 sm:flex-row"
          >
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-full bg-slate-200 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-300"
            >
              View Projects
              <FiArrowRight className="ml-2 h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-900/95 px-6 py-3 text-sm font-semibold text-white transition hover:border-slate-500 hover:bg-slate-800"
            >
              Contact Me
            </a>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-transparent px-6 py-3 text-sm font-semibold text-slate-200 transition hover:bg-slate-900"
            >
              <FiDownload className="mr-2 h-4 w-4" />
              Download Resume
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="rounded-[2rem] border border-slate-800 bg-slate-950/95 p-7 shadow-panel"
        >
          <div className="space-y-6">
            <div className="flex flex-col items-start gap-5 rounded-[1.75rem] border border-slate-800 bg-slate-900/95 p-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-4">
                <div className="overflow-hidden rounded-full border border-slate-700 bg-slate-900 p-1 shadow-sm shadow-slate-900/30">
                  <img
                    src="/profile.jpg"
                    alt="Ritik Kumar Bharti"
                    onError={(event) => {
                      event.currentTarget.onerror = null;
                      event.currentTarget.src = '/profile.svg';
                    }}
                    className="h-24 w-24 rounded-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">Ritik Kumar Bharti</p>
                  <p className="text-sm text-slate-400">Full Stack Developer</p>
                </div>
              </div>
              <span className="rounded-full border border-slate-700 bg-slate-900/80 px-3 py-2 text-xs uppercase tracking-[0.24em] text-slate-300">
                Product-focused
              </span>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {techHighlights.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-slate-800 bg-slate-900/95 px-4 py-3 text-sm text-slate-100"
                >
                  {item}
                </div>
              ))}
            </div>

            <div className="rounded-[1.75rem] border border-slate-800 bg-slate-900/95 p-5">
              <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Focus areas</p>
              <div className="mt-4 space-y-3 text-slate-300">
                <div className="flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-950/90 px-4 py-3">
                  <span>Frontend & backend delivery</span>
                  <span className="text-slate-200">Reliable</span>
                </div>
                <div className="flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-950/90 px-4 py-3">
                  <span>API integrations</span>
                  <span className="text-slate-200">Efficient</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
