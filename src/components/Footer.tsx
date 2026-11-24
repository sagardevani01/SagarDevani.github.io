import React from 'react';
import { resumeData } from '../data/resumeData';
import { ArrowUp, Mail } from 'lucide-react';
import { LinkedInIcon, GitHubIcon } from './Icons';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-slate-200/80 dark:border-slate-800/80 bg-white/40 dark:bg-slate-950/60 backdrop-blur-xs text-xs text-slate-500 dark:text-slate-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
            <span className="font-semibold text-slate-800 dark:text-slate-200">
              © 2026 {resumeData.personal.name}
            </span>
            <span className="hidden sm:inline text-slate-300 dark:text-slate-700">•</span>
            <span>Full Stack .NET &amp; Generative AI Developer</span>
          </div>

          <div className="flex items-center space-x-5">
            <a
              href={resumeData.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-900 dark:hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <GitHubIcon className="w-4 h-4" />
            </a>
            <a
              href={resumeData.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedInIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${resumeData.personal.email}`}
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-1.5 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors ml-2"
              aria-label="Scroll back to top"
              title="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
};
