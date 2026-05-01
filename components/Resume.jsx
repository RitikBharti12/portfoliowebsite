'use client';

import { FiDownload, FiExternalLink } from 'react-icons/fi';

export default function Resume() {
  return (
    <section id="resume" className="pt-24">
      <div className="rounded-[2rem] border border-slate-800 bg-slate-950/95 p-10 shadow-panel">
        <div className="mx-auto flex max-w-4xl flex-col gap-10 text-slate-100 sm:px-6">
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <p className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">Resume</p>
              <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">
                Download ready
              </span>
            </div>
            <div className="space-y-3">
              <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Download the full resume
              </h2>
              <p className="max-w-3xl text-base leading-8 text-slate-400">
                Get a complete overview of my experience, projects, certifications, and skills. The resume is available for direct download or via Google Drive.
              </p>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.5fr_auto]">
            <div className="rounded-3xl border border-slate-800 bg-slate-900/95 p-8 text-slate-100">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">Ritik Kumar Bharti</p>
              <p className="mt-4 text-2xl font-semibold text-white">Full Stack Developer</p>
              <p className="mt-3 text-slate-400">
                My resume highlights web projects, backend systems, product-focused delivery, and certifications that show my technical depth and impact.
              </p>
              <ul className="mt-6 space-y-3 text-slate-300">
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-cyan-400" />
                  Product-led web applications and scalable system design
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-cyan-400" />
                  Clean architecture, API integrations, and React/Next.js delivery
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-cyan-400" />
                  Certifications, achievements, and career accomplishments in software engineering
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-4 sm:items-end">
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center justify-center rounded-full bg-cyan-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
              >
                <FiDownload className="mr-2 h-4 w-4" />
                Download Resume
              </a>
              <a
                href="https://drive.google.com/file/d/1oPS-wB6dY1jP99xB6jdNEYpmflLupGys/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-900/95 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-slate-600 hover:bg-slate-800"
              >
                <FiExternalLink className="mr-2 h-4 w-4" />
                Open on Google Drive
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
