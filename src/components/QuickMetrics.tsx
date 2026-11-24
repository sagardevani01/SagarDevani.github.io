import React from 'react';
import { resumeData } from '../data/resumeData';
import { Clock, Rocket, Zap, Award } from 'lucide-react';

const metricIcons = [Clock, Rocket, Zap, Award];

export const QuickMetrics: React.FC = () => {
  return (
    <section className="py-8 border-y border-slate-200/80 dark:border-slate-800/80 bg-white/60 dark:bg-slate-900/40 backdrop-blur-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {resumeData.metrics.map((item, index) => {
            const Icon = metricIcons[index % metricIcons.length];
            return (
              <div 
                key={item.label}
                className="flex flex-col space-y-1.5 p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
              >
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-mono tracking-tight">
                    {item.value}
                  </span>
                </div>
                <div className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200">
                  {item.label}
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 leading-tight">
                  {item.sublabel}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
