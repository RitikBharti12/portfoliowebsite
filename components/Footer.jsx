import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const contactEmail = 'bhartiritik06@gmail.xom';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#060b18]/90 py-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 text-slate-400 sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <p className="text-sm text-slate-300">Designed & Developed by Ritik Kumar Bharti</p>
        <div className="flex flex-wrap items-center gap-4 text-sm text-slate-300">
          <a href="https://github.com/RitikBharti12" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 transition hover:text-white">
            <FiGithub className="h-4 w-4" /> GitHub
          </a>
          <a href="https://www.linkedin.com/in/ritik-bharti01/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 transition hover:text-white">
            <FiLinkedin className="h-4 w-4" /> LinkedIn
          </a>
          <a href={`mailto:${contactEmail}`} className="inline-flex items-center gap-2 transition hover:text-white">
            <FiMail className="h-4 w-4" /> Email
          </a>
        </div>
      </div>
    </footer>
  );
}
