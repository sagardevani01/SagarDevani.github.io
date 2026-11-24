import React, { useState } from 'react';
import { resumeData, ProjectItem } from '../data/resumeData';
import { CheckCircle } from 'lucide-react';

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Full Stack', 'Frontend / UI', 'Backend / Cloud', 'AI Integration'];

  const filteredProjects = selectedCategory === 'All'
    ? resumeData.projects
    : resumeData.projects.filter(p => p.category === selectedCategory);

  return (
    <section id="projects" className="py-20 bg-slate-100/50 dark:bg-slate-900/40 border-y border-slate-200/80 dark:border-slate-800/80 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400"></span>
              Engineering Portfolio
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
              Featured Enterprise Systems
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-xl">
              Architectural initiatives and core systems engineered during full-stack production delivery.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-1.5 p-1 rounded-xl bg-slate-200/70 dark:bg-slate-800/90 border border-slate-300/60 dark:border-slate-700/60 self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-150 ${
                  selectedCategory === cat
                    ? 'bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-xs font-semibold'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project: ProjectItem) => {
            return (
              <div
                key={project.id}
                className="group rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Visual Header / Abstract Blueprint Graphic */}
                <div className="p-6 border-b border-slate-100 dark:border-slate-800 bg-gradient-to-br from-slate-50 to-slate-100/50 dark:from-slate-900 dark:to-slate-800/50">
                  <div className="flex items-center justify-between mb-3">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md text-[11px] font-mono font-medium bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-400 border border-blue-200 dark:border-blue-900/60">
                      {project.category}
                    </span>
                    {project.metricsBadge && (
                      <span className="text-[11px] font-mono font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-200 dark:border-emerald-800/60">
                        {project.metricsBadge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white tracking-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <div className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-1">
                    {project.companyContext}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-2.5 font-normal leading-relaxed">
                    {project.tagline}
                  </p>
                </div>

                {/* Problem & Solution Breakdown */}
                <div className="p-6 space-y-4 flex-1 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                  
                  {/* Problem Statement */}
                  <div className="space-y-1">
                    <span className="text-[11px] font-mono uppercase tracking-wider font-semibold text-slate-500 dark:text-slate-400">
                      Problem Context:
                    </span>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      {project.problem}
                    </p>
                  </div>

                  {/* Architecture & Engineering Highlights */}
                  <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800">
                    <span className="text-[11px] font-mono uppercase tracking-wider font-semibold text-slate-500 dark:text-slate-400">
                      Core Technical Deliverables:
                    </span>
                    <ul className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300">
                      {project.keyContributions.map((c, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle className="w-3.5 h-3.5 text-blue-500 mt-0.5 shrink-0" />
                          <span className="leading-normal">{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>

                {/* Card Footer: Tech Badges */}
                <div className="px-6 py-4 bg-slate-50/70 dark:bg-slate-900/80 border-t border-slate-100 dark:border-slate-800">
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map(t => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded text-[11px] font-medium bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
