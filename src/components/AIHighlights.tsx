import React from 'react';
import { 
  Sparkles, 
  Terminal, 
  BookOpen, 
  Workflow, 
  CheckCircle2
} from 'lucide-react';

export const AIHighlights: React.FC = () => {
  return (
    <section id="ai-engineering" className="py-20 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col space-y-2 mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>AI-Augmented Engineering</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Practical AI in Production &amp; Exploration
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl">
            How I incorporate AI coding platforms into daily enterprise delivery, alongside structured self-directed study in LLMs and RAG architectures.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Daily Production Practice */}
          <div className="rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 flex flex-col justify-between shadow-xs hover:border-amber-400/50 dark:hover:border-amber-500/40 transition-all duration-200">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center">
                <Terminal className="w-5 h-5" />
              </div>
              <div className="space-y-1.5">
                <span className="text-[11px] font-mono font-semibold text-amber-600 dark:text-amber-400 uppercase tracking-wider">
                  Production Velocity
                </span>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                  Daily AI Coding Toolchain
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Active daily use of <strong>GitHub Copilot, Claude Code, Cursor, and ChatGPT</strong> to accelerate implementation speed, draft comprehensive unit tests, and pre-screen PRs during Agile sprint cycles.
              </p>
              <ul className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-700 dark:text-slate-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 mt-0.5 shrink-0" />
                  <span>Rapid boilerplate &amp; REST contract scaffolding</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 mt-0.5 shrink-0" />
                  <span>Unit test edge-case scenario drafting</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 mt-0.5 shrink-0" />
                  <span>Earlier defect detection in code reviews</span>
                </li>
              </ul>
            </div>
            
            <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800 text-[11px] font-mono text-slate-500 dark:text-slate-400">
              Tools: GitHub Copilot • Claude Code • Cursor • ChatGPT
            </div>
          </div>

          {/* Card 2: Emerging Generative AI Foundations */}
          <div className="rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 flex flex-col justify-between shadow-xs hover:border-blue-400/50 dark:hover:border-blue-500/40 transition-all duration-200">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                <BookOpen className="w-5 h-5" />
              </div>
              <div className="space-y-1.5">
                <span className="text-[11px] font-mono font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                  Self-Directed Study
                </span>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                  Generative AI &amp; RAG Concepts
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Actively expanding foundational full-stack knowledge into modern AI architectures, focusing on prompt engineering techniques and Retrieval-Augmented Generation (RAG).
              </p>
              <ul className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-700 dark:text-slate-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 mt-0.5 shrink-0" />
                  <span>LLM architecture principles &amp; context windows</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 mt-0.5 shrink-0" />
                  <span>Prompt engineering for deterministic outputs</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 mt-0.5 shrink-0" />
                  <span>RAG pipelines for grounded data retrieval</span>
                </li>
              </ul>
            </div>
            
            <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800 text-[11px] font-mono text-slate-500 dark:text-slate-400">
              Focus: LLMs • Prompting • RAG • Agentic Patterns
            </div>
          </div>

          {/* Card 3: Engineering Rigor & Discipline */}
          <div className="rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 flex flex-col justify-between shadow-xs hover:border-emerald-400/50 dark:hover:border-emerald-500/40 transition-all duration-200">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                <Workflow className="w-5 h-5" />
              </div>
              <div className="space-y-1.5">
                <span className="text-[11px] font-mono font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
                  Quality &amp; Ownership
                </span>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                  Engineering Standards First
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Treating AI tools as assistive force-multipliers rather than unquestioned decision makers—maintaining code ownership, rigorous architectural review, and end-to-end unit testing.
              </p>
              <ul className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-700 dark:text-slate-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 mt-0.5 shrink-0" />
                  <span>Strict adherence to Clean Architecture &amp; SOLID</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 mt-0.5 shrink-0" />
                  <span>Type safety in C# and TypeScript without shortcuts</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 mt-0.5 shrink-0" />
                  <span>Azure DevOps pipeline verification before release</span>
                </li>
              </ul>
            </div>
            
            <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800 text-[11px] font-mono text-slate-500 dark:text-slate-400">
              Discipline: Clean Architecture • SOLID • Human-Verified
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
