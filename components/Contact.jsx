'use client';

import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiGithub, FiLinkedin } from 'react-icons/fi';

const contactEmail = 'bhartiritik06@gmail.xom';

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 py-16">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
          className="mb-10 flex items-center gap-3 text-sm uppercase tracking-[0.25em] text-cyan-300"
        >
          <FiMail className="h-5 w-5" />
          Contact
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55 }}
            className="glass-card rounded-[2rem] border border-white/10 p-8"
          >
            <h2 className="text-3xl font-semibold text-white">Let’s build something impactful.</h2>
            <p className="mt-4 max-w-xl text-slate-300">
              I’m available for full-stack roles, internships, and collaborative product work. Please email me directly for contact.
            </p>
            <div className="mt-10 space-y-5 text-sm text-slate-300">
              <div className="flex items-center gap-3 rounded-3xl border border-white/10 bg-slate-950/70 p-4">
                <FiMail className="h-5 w-5 text-cyan-300" />
                <a href={`mailto:${contactEmail}`} className="text-slate-100 transition hover:text-white">
                  {contactEmail}
                </a>
              </div>
              <div className="flex items-center gap-3 rounded-3xl border border-white/10 bg-slate-950/70 p-4">
                <FiPhone className="h-5 w-5 text-cyan-300" />
                <span>+91 6207867842</span>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <a
                  href="https://github.com/RitikBharti12"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 rounded-3xl border border-white/10 bg-slate-950/70 px-4 py-4 text-slate-200 transition hover:border-cyan-400/40"
                >
                  <FiGithub className="h-5 w-5 text-cyan-300" />
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/ritik-bharti01/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 rounded-3xl border border-white/10 bg-slate-950/70 px-4 py-4 text-slate-200 transition hover:border-cyan-400/40"
                >
                  <FiLinkedin className="h-5 w-5 text-cyan-300" />
                  LinkedIn
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="glass-card rounded-[2rem] border border-white/10 p-8"
          >
            <h3 className="text-2xl font-semibold text-white">Contact by email</h3>
            <p className="mt-4 text-slate-300">
              I’ve removed the contact form here. Please use the email address below to reach me directly.
            </p>
            <div className="mt-8 rounded-3xl border border-white/10 bg-slate-950/80 p-6 text-slate-200">
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Email</p>
              <a href={`mailto:${contactEmail}`} className="mt-3 block text-lg font-semibold text-white transition hover:text-cyan-300">
                {contactEmail}
              </a>
              <p className="mt-4 text-sm text-slate-400">
                Email is the best way to reach me for project inquiries, roles, or general collaboration.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
