import React from 'react';
import { resumeData } from '../data/resumeData';
import { GraduationCap, Award, Users, Calendar, MapPin } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-14 scroll-mt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col space-y-1.5 mb-8">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
            <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400" />
            Academic &amp; Leadership
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Education
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Education Card */}
          <div className="lg:col-span-7 rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white/80 dark:bg-slate-900/75 backdrop-blur-sm p-6 shadow-xs flex flex-col justify-between">
            <div className="flex items-start gap-4">
              <div className="p-2.5 rounded-xl bg-blue-50 dark:bg-blue-900/25 text-blue-600 dark:text-blue-400 shrink-0">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-mono font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 mb-1">
                  <Award className="w-3 h-3" />
                  <span>{resumeData.education.grade}</span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white tracking-tight">
                  {resumeData.education.degree}
                </h3>
                <div className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                  {resumeData.education.institution}
                </div>
                <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-500 dark:text-slate-400 pt-1">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{resumeData.education.period}</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{resumeData.education.location}</span>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Leadership Card */}
          <div className="lg:col-span-5 rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white/80 dark:bg-slate-900/75 backdrop-blur-sm p-6 shadow-xs space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold">
              Leadership &amp; Coordination
            </div>
            {resumeData.education.leadership.map((item, idx) => (
              <div key={idx} className="flex items-start gap-2.5">
                <Users className="w-4 h-4 text-indigo-500 mt-0.5 shrink-0" />
                <div>
                  <div className="text-xs font-bold text-slate-900 dark:text-white">
                    {item.role} <span className="font-mono font-normal text-indigo-600 dark:text-indigo-400">({item.event})</span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-normal">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
