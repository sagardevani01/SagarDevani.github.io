import React from 'react';
import { resumeData } from '../data/resumeData';
import {
  Server,
  Layout,
  Database,
  Cloud,
  Cpu,
  ShieldCheck,
  Binary,
  Layers,
} from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Server,
  Layout,
  Database,
  Cloud,
  Cpu,
  ShieldCheck,
  Binary,
};

export const Skills: React.FC = () => {
  return (
    <section
      id="skills"
      className="py-14 border-y border-slate-200/80 dark:border-slate-800/80 bg-slate-100/40 dark:bg-slate-900/25 scroll-mt-20"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col space-y-1.5 mb-8">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
            <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400" />
            Technical Stack
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Skills &amp; Technologies
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {resumeData.skillCategories.map((category) => {
            const Icon = iconMap[category.iconName] || Layers;
            return (
              <div
                key={category.title}
                className="rounded-xl border border-slate-200/80 dark:border-slate-800 bg-white/80 dark:bg-slate-900/75 backdrop-blur-sm p-4 shadow-xs hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
              >
                <div className="flex items-center gap-2.5 mb-3">
                  <div className="p-1.5 rounded-lg bg-blue-50 dark:bg-blue-900/25 text-blue-600 dark:text-blue-400">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {category.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className="px-2 py-0.5 rounded text-xs font-medium bg-slate-50 dark:bg-slate-800/70 border border-slate-200/80 dark:border-slate-700/70 text-slate-700 dark:text-slate-300"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
