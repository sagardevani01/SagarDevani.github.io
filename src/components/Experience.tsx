import React from 'react';
import { resumeData, ExperienceItem } from '../data/resumeData';
import { Briefcase, MapPin, Calendar, CheckCircle2 } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-14 scroll-mt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col space-y-1.5 mb-8">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
            <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400" />
            Career Timeline
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Professional Experience
          </h2>
        </div>

        <div className="relative pl-6 md:pl-8 border-l-2 border-slate-200 dark:border-slate-800 space-y-6">
          {resumeData.experiences.map((exp: ExperienceItem) => {
            const isCurrent = exp.current;

            return (
              <div key={exp.id} className="relative">
                <div
                  className={`absolute -left-[31px] md:-left-[39px] top-1.5 w-7 h-7 rounded-full flex items-center justify-center border-2 ${
                    isCurrent
                      ? 'bg-blue-600 border-blue-200 dark:border-blue-900 text-white shadow-md shadow-blue-500/30'
                      : 'bg-white dark:bg-slate-900 border-slate-300 dark:border-slate-700 text-slate-500 dark:text-slate-400'
                  }`}
                >
                  <Briefcase className="w-3.5 h-3.5" />
                </div>

                <div
                  className={`rounded-2xl border p-5 sm:p-6 backdrop-blur-sm transition-colors ${
                    isCurrent
                      ? 'bg-white/85 dark:bg-slate-900/80 border-blue-300 dark:border-blue-900/60 shadow-sm'
                      : 'bg-white/75 dark:bg-slate-900/65 border-slate-200/80 dark:border-slate-800'
                  }`}
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-3">
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight">
                          {exp.role}
                        </h3>
                        {isCurrent && (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                            Current
                          </span>
                        )}
                      </div>
                      <div className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                        {exp.company}
                      </div>
                    </div>

                    <div className="flex flex-wrap md:flex-col md:items-end gap-x-4 gap-y-1 text-xs text-slate-500 dark:text-slate-400 font-mono">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{exp.period}</span>
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>{exp.location}</span>
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300 mb-4">
                    {exp.highlights.map((point, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" />
                        <span className="leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-100 dark:border-slate-800/80">
                    {exp.technologies.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded text-[11px] font-medium bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300"
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
