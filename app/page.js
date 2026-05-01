import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Certifications from '@/components/Certifications';
import Achievements from '@/components/Achievements';
import Education from '@/components/Education';
import Resume from '@/components/Resume';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-ink text-slate-100 selection:bg-cyan-500 selection:text-slate-950">
      <div className="absolute inset-0 bg-hero opacity-90" aria-hidden="true" />
      <div className="relative overflow-hidden">
        <Navbar />
        <main className="relative mx-auto max-w-7xl px-6 pb-24 pt-6 lg:px-8">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Certifications />
          <Achievements />
          <Education />
          <Resume />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
