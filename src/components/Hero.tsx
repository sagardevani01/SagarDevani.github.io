import React from 'react';
import {
  ArrowRight,
  Download,
  MapPin,
  Mail,
  Briefcase,
  Clock,
  Rocket,
  Zap,
  Award,
} from 'lucide-react';
import { resumeData } from '../data/resumeData';
import { LinkedInIcon, GitHubIcon } from './Icons';

const metricIcons = [Clock, Rocket, Zap, Award];

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-28 pb-14 md:pt-36 md:pb-20 overflow-hidden tech-grid-pattern">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Who I am & Value Proposition */}
          <div className="lg:col-span-7 flex flex-col space-y-5">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Open to Full-Time Roles</span>
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs text-slate-600 dark:text-slate-400 bg-white/70 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700/60">
                <MapPin className="w-3 h-3 text-slate-400" />
                <span>{resumeData.personal.location}</span>
              </span>
            </div>

            <div className="space-y-1.5">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                {resumeData.personal.name}
              </h1>
              <h2 className="text-base sm:text-lg font-semibold text-blue-600 dark:text-blue-400 font-mono tracking-tight">
                {resumeData.personal.role}
              </h2>
            </div>

            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-xl">
              Full Stack Engineer with <strong className="font-semibold text-slate-900 dark:text-white">3+ years</strong> building enterprise web applications using{' '}
              <strong className="font-semibold text-slate-900 dark:text-white">.NET Core, ASP.NET Core Web API, and Angular</strong>, backed by SQL Server and Microsoft Azure. I apply Clean Architecture, SOLID principles, and AI coding workflows (Copilot, Claude Code, Cursor) to ship reliable software faster, while exploring Generative AI and RAG patterns.
            </p>

            {/* Primary CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a
                href={resumeData.personal.resumePdf}
                download="Sagar_Devani_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800 shadow-sm hover:shadow transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </a>

              <a
                href="#experience"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold border border-slate-300 dark:border-slate-700 bg-white/80 dark:bg-slate-800/70 text-slate-800 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors group"
              >
                <span>View Experience</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 px-3 py-2.5 rounded-lg text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>Contact</span>
              </a>
            </div>

            {/* Social Strip */}
            <div className="flex flex-wrap items-center gap-4 pt-3 border-t border-slate-200/80 dark:border-slate-800/80 text-xs text-slate-500 dark:text-slate-400">
              <a
                href={resumeData.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <LinkedInIcon className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
              </a>
              <span className="text-slate-300 dark:text-slate-700">•</span>
              <a
                href={resumeData.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                <GitHubIcon className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
              <span className="text-slate-300 dark:text-slate-700">•</span>
              <a
                href={`mailto:${resumeData.personal.email}`}
                className="inline-flex items-center gap-1.5 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>{resumeData.personal.email}</span>
              </a>
            </div>
          </div>

          {/* Right Column: At-a-Glance Impact Summary */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-slate-200/80 dark:border-slate-800/90 bg-white/80 dark:bg-slate-900/75 backdrop-blur-sm p-5 shadow-lg shadow-slate-200/40 dark:shadow-black/40 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-900 dark:text-white">
                  <Briefcase className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  <span>At a Glance</span>
                </div>
                <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
                  Senior Software Engineer @ QX Global Group
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {resumeData.metrics.map((item, idx) => {
                  const Icon = metricIcons[idx % metricIcons.length];
                  return (
                    <div
                      key={item.label}
                      className="p-3 rounded-xl bg-slate-50/90 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/50 space-y-1"
                    >
                      <div className="flex items-center gap-1.5">
                        <Icon className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0" />
                        <span className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white font-mono">
                          {item.value}
                        </span>
                      </div>
                      <div className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                        {item.label}
                      </div>
                      <div className="text-[11px] text-slate-500 dark:text-slate-400 leading-tight">
                        {item.sublabel}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex flex-wrap gap-1.5">
                {['C# / .NET Core', 'ASP.NET Web API', 'Angular 2+', 'SQL Server', 'Microsoft Azure', 'Copilot & RAG'].map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded text-[11px] font-mono bg-blue-50/80 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300 border border-blue-200/70 dark:border-blue-800/50"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
