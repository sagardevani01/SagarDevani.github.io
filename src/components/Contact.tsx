import React, { useState } from 'react';
import { resumeData } from '../data/resumeData';
import { Mail, Phone, Copy, Check, Download, ArrowUpRight } from 'lucide-react';
import { LinkedInIcon, GitHubIcon } from './Icons';

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  return (
    <section id="contact" className="py-16 scroll-mt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white/80 dark:bg-slate-900/75 backdrop-blur-sm p-6 sm:p-10 shadow-lg shadow-slate-200/40 dark:shadow-black/40">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400" />
                Contact
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                Let's build something reliable.
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Open to Full Stack .NET + Angular and Generative AI engineering roles. Feel free to reach out directly or download my resume.
              </p>
              <div className="flex flex-wrap items-center gap-3 pt-1">
                <a
                  href={`mailto:${resumeData.personal.email}`}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold bg-blue-600 text-white hover:bg-blue-700 shadow-sm transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span>Send Email</span>
                </a>
                <a
                  href={resumeData.personal.resumePdf}
                  download="Sagar_Devani_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700/80 transition-colors"
                >
                  <Download className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  <span>Resume (PDF)</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-3">
              <div className="p-3.5 rounded-xl border border-slate-200/80 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-800/50 flex items-center justify-between">
                <div className="flex items-center gap-3 overflow-hidden">
                  <Mail className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                  <a
                    href={`mailto:${resumeData.personal.email}`}
                    className="text-xs sm:text-sm font-medium text-slate-900 dark:text-white truncate hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    {resumeData.personal.email}
                  </a>
                </div>
                <button
                  onClick={() => copyToClipboard(resumeData.personal.email, 'email')}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-200/60 dark:hover:bg-slate-700 transition-colors"
                  aria-label="Copy email address"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              <div className="p-3.5 rounded-xl border border-slate-200/80 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-800/50 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <a
                    href={`tel:${resumeData.personal.phone.replace(/[^0-9+]/g, '')}`}
                    className="text-xs sm:text-sm font-medium text-slate-900 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-400"
                  >
                    {resumeData.personal.phone}
                  </a>
                </div>
                <button
                  onClick={() => copyToClipboard(resumeData.personal.phone, 'phone')}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-200/60 dark:hover:bg-slate-700 transition-colors"
                  aria-label="Copy phone number"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <a
                  href={resumeData.personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-800/50 flex items-center justify-between hover:border-blue-500 transition-colors group"
                >
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-800 dark:text-slate-200">
                    <LinkedInIcon className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                    <span>LinkedIn</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-500 transition-colors" />
                </a>

                <a
                  href={resumeData.personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-800/50 flex items-center justify-between hover:border-slate-400 dark:hover:border-slate-600 transition-colors group"
                >
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-800 dark:text-slate-200">
                    <GitHubIcon className="w-4 h-4 text-slate-700 dark:text-slate-300" />
                    <span>GitHub</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
