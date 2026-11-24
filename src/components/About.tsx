import React from 'react';
import { resumeData } from '../data/resumeData';
import { CheckCircle, Code, Shield, Cpu, ExternalLink } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col space-y-2 mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
            <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400"></span>
            Profile &amp; Engineering Philosophy
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            About Sagar Devani
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl">
            A software engineer focused on building clean, testable enterprise systems across the full stack.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Main Narrative Column */}
          <div className="lg:col-span-7 space-y-6 text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            <p>
              I am a <strong>Full Stack Engineer</strong> with <strong>3+ years</strong> of industrial experience architecting and delivering enterprise web applications. My core expertise sits squarely at the intersection of robust backend engineering in <strong>.NET Core, C#, and ASP.NET Core Web API</strong>, paired with dynamic, type-safe client applications in <strong>Angular (TypeScript)</strong>.
            </p>
            <p>
              Throughout my engineering journey across <strong>QX Global Group</strong> and <strong>Cybage Software</strong>, I have focused on solving real-world architecture challenges: decoupling interconnected services through <em>Clean Architecture</em> and <em>Dependency Injection</em>, decreasing database bottlenecks via LINQ query optimization, and automating deployments with <em>Azure DevOps CI/CD pipelines</em>.
            </p>
            <p>
              In my day-to-day work, I proactively integrate modern AI engineering assistants—such as <strong>GitHub Copilot, Claude Code, Cursor, and ChatGPT</strong>—to streamline test generation, review pull requests earlier, and boost sprint output. Alongside production .NET/Azure systems, I maintain active, self-directed research into <strong>LLM fundamentals, prompt engineering, and Retrieval-Augmented Generation (RAG)</strong> to prepare for next-generation agentic workflows.
            </p>

            {/* Quick Core Strengths Checklist */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200">
              <div className="flex items-center gap-2.5">
                <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Clean Architecture &amp; SOLID Principles</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Angular SPAs &amp; NgRx State Flow</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>ASP.NET Core Web API &amp; JWT Auth</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Azure Cloud &amp; CI/CD Automation</span>
              </div>
            </div>
          </div>

          {/* Right Column: Architectural Highlights Cards */}
          <div className="lg:col-span-5 space-y-3.5">
            {resumeData.about.highlights.map((item, idx) => {
              const icons = [Shield, Code, Cpu, Shield];
              const Icon = icons[idx % icons.length];
              return (
                <div
                  key={item.title}
                  className="p-4 rounded-xl border border-slate-200/80 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 hover:border-blue-400 dark:hover:border-blue-500/50 transition-all duration-200 shadow-xs"
                >
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 mt-0.5">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-sm font-semibold text-slate-900 dark:text-white">
                        {item.title}
                      </h3>
                      <p className="text-xs text-slate-600 dark:text-slate-400 leading-normal">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Profile banner preview card */}
            <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-gradient-to-r from-blue-500/5 to-indigo-500/5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-mono font-bold text-sm">
                  SD
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-900 dark:text-white">
                    Sagar Devani
                  </div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 font-mono">
                    Senior Software Engineer
                  </div>
                </div>
              </div>
              <a
                href={resumeData.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-medium text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
              >
                <span>View LinkedIn</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
