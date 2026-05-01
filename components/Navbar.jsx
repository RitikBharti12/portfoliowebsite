'use client';

import { useEffect, useState } from 'react';
import { FiGithub, FiMail, FiMoon, FiSun } from 'react-icons/fi';

const links = [
  { label: 'Home', target: 'home' },
  { label: 'About', target: 'about' },
  { label: 'Skills', target: 'skills' },
  { label: 'Projects', target: 'projects' },
  { label: 'Certifications', target: 'certifications' },
  { label: 'Achievements', target: 'achievements' },
  { label: 'Education', target: 'education' },
  { label: 'Resume', target: 'resume' },
  { label: 'Contact', target: 'contact' },
];

export default function Navbar() {
  const [active, setActive] = useState('home');
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const stored = window.localStorage.getItem('theme');
    const currentTheme = stored || 'dark';
    setTheme(currentTheme);
    document.documentElement.classList.remove('dark', 'light');
    document.documentElement.classList.add(currentTheme === 'dark' ? 'dark' : 'light');
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const offsets = links.map((link) => {
        const section = document.getElementById(link.target);
        return section ? { id: link.target, top: section.getBoundingClientRect().top } : null;
      }).filter(Boolean);
      const nearest = offsets.reduce((prev, curr) => {
        return Math.abs(curr.top) < Math.abs(prev.top) ? curr : prev;
      }, offsets[0] || { id: 'home', top: 0 });
      setActive(nearest.id);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    window.localStorage.setItem('theme', next);
    document.documentElement.classList.remove('dark', 'light');
    document.documentElement.classList.add(next === 'dark' ? 'dark' : 'light');
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4 lg:px-8">
        <a href="#home" className="text-lg font-semibold tracking-[0.2em] text-slate-100 uppercase">
          Ritik
        </a>
        <nav className="hidden items-center gap-2 md:flex">
          {links.map((link) => (
            <a
              key={link.target}
              href={`#${link.target}`}
              className={`rounded-full px-4 py-2 text-sm transition ${
                active === link.target
                  ? 'bg-slate-900 text-white shadow-sm shadow-slate-900/40'
                  : 'text-slate-400 hover:text-white hover:bg-slate-900/70'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={toggleTheme}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-700 bg-slate-900/90 text-slate-200 transition hover:border-slate-500 hover:text-white"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <FiSun className="h-5 w-5" /> : <FiMoon className="h-5 w-5" />}
          </button>
          <a
            href="/resume.pdf"
            download
            className="hidden rounded-full border border-slate-700 bg-slate-900/95 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-slate-600 hover:bg-slate-800 md:inline-flex"
          >
            Resume
          </a>
        </div>
      </div>
    </header>
  );
}
