import React, { useState, useEffect } from 'react';
import { Download, Menu, X, ArrowUpRight } from 'lucide-react';
import { resumeData } from '../data/resumeData';
import { ThemeToggle } from './ThemeToggle';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'glass-nav py-3 border-b border-slate-200/80 dark:border-slate-800/80 shadow-sm dark:shadow-black/20'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <a
            href="#"
            className="group flex items-center space-x-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg p-1"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white font-mono font-bold text-sm shadow-sm group-hover:scale-105 transition-transform duration-200">
              SD
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-sm tracking-tight text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {resumeData.personal.name}
              </span>
              <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
                .NET &amp; Angular
              </span>
            </div>
          </a>

          <nav className="hidden md:flex items-center space-x-1" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3 py-1.5 rounded-md text-xs font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-white hover:bg-slate-100/80 dark:hover:bg-slate-800/60 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden sm:flex items-center space-x-3">
            <ThemeToggle />
            <a
              href={resumeData.personal.resumePdf}
              download="Sagar_Devani_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-medium bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800 shadow-sm hover:shadow transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900"
              aria-label="Download Sagar Devani's Resume PDF"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>
          </div>

          <div className="flex items-center space-x-2 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden glass-panel border-t border-slate-200/80 dark:border-slate-800/80 px-4 pt-3 pb-6 mt-2 animate-fade-in shadow-xl">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-md text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-4 mt-3 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-2">
            <a
              href={resumeData.personal.resumePdf}
              download="Sagar_Devani_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg text-sm font-medium bg-blue-600 text-white hover:bg-blue-700 shadow-sm transition-colors"
            >
              <Download className="w-4 h-4" />
              <span>Download Resume (PDF)</span>
            </a>
            <div className="flex gap-2">
              <a
                href={resumeData.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-xs font-medium border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
              <a
                href={resumeData.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-xs font-medium border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                <span>GitHub</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
