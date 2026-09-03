import React, { useState } from 'react';
import { CASE_STUDIES } from '../data/dpiData';
import { Landmark, ShieldAlert, Cpu, Award, Globe, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function CaseStudiesSection() {
  const [activeTabId, setActiveTabId] = useState('nadra');
  const activeCase = CASE_STUDIES.find(c => c.id === activeTabId) || CASE_STUDIES[0];

  return (
    <section id="case-studies" className="py-24 bg-[#0B1F3A] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-mono uppercase tracking-wider mb-4">
            <Landmark className="w-3.5 h-3.5" /> Regional Deployment Deep Dives
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold font-heading text-white tracking-tight">
            Pakistan & Emerging Market <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-300">Case Studies</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg mt-4 leading-relaxed">
            Illustrative implementation blueprints modeled on national platforms—highlighting identity scaling, welfare fund protection, and voice-assisted civic access.
          </p>
        </div>

        {/* Case Study Tabs Header */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {CASE_STUDIES.map((item) => {
            const isSelected = activeTabId === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTabId(item.id)}
                className={`px-5 py-3 rounded-xl font-medium text-xs sm:text-sm transition-all duration-200 flex items-center gap-2.5 border ${
                  isSelected
                    ? 'bg-gradient-to-r from-teal-500 to-cyan-600 text-slate-950 font-bold border-teal-400 shadow-lg shadow-teal-500/20 scale-[1.02]'
                    : 'bg-slate-900/60 text-slate-300 border-slate-800 hover:border-slate-700 hover:text-white'
                }`}
              >
                <Globe className={`w-4 h-4 ${isSelected ? 'text-slate-950' : 'text-teal-400'}`} />
                <span>{item.title.split('&')[0]}</span>
              </button>
            );
          })}
        </div>

        {/* Case Study Active Card Body */}
        <div className="bg-slate-900/80 border border-teal-500/30 rounded-2xl p-6 sm:p-10 backdrop-blur-md shadow-2xl">
          
          {/* Header Info Strip */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-8 mb-8 border-b border-slate-800">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs font-mono font-semibold uppercase px-3 py-1 rounded-full bg-teal-500/10 text-teal-300 border border-teal-500/20">
                  {activeCase.tag}
                </span>
                <span className="text-xs text-slate-400 font-mono">
                  {activeCase.location}
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold font-heading text-white">
                {activeCase.title}
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Institutional Sponsor: <span className="text-slate-200 font-medium">{activeCase.entity}</span>
              </p>
            </div>

            {/* Illustrative Disclaimer Tag */}
            <div className="self-start md:self-auto px-3 py-1.5 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-300 text-[11px] font-mono">
              ★ Illustrative National Case Study Model
            </div>
          </div>

          {/* Key Impact Stats Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            {activeCase.metrics.map((m, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-slate-950/70 border border-slate-800/80">
                <span className="text-2xl sm:text-3xl font-bold font-heading text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-300 block">
                  {m.value}
                </span>
                <span className="text-xs text-slate-300 font-medium mt-1 block">
                  {m.label}
                </span>
              </div>
            ))}
          </div>

          {/* Challenge / AI Solution / Impact 3-Column Breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Challenge */}
            <div className="p-5 rounded-xl bg-slate-950/50 border border-slate-800">
              <div className="flex items-center gap-2 text-rose-400 font-semibold text-sm mb-3">
                <ShieldAlert className="w-4 h-4 shrink-0" />
                <span>The Challenge</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {activeCase.challenge}
              </p>
            </div>

            {/* AI Solution */}
            <div className="p-5 rounded-xl bg-slate-950/50 border border-teal-500/30">
              <div className="flex items-center gap-2 text-cyan-300 font-semibold text-sm mb-3">
                <Cpu className="w-4 h-4 shrink-0 text-cyan-400" />
                <span>The AI Layer Intervention</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                {activeCase.solution}
              </p>
            </div>

            {/* Impact */}
            <div className="p-5 rounded-xl bg-slate-950/50 border border-slate-800">
              <div className="flex items-center gap-2 text-emerald-400 font-semibold text-sm mb-3">
                <Award className="w-4 h-4 shrink-0 text-emerald-400" />
                <span>Verified / Projected Impact</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {activeCase.impact}
              </p>
            </div>
          </div>

          {/* Technology & Compliance Stack Badges */}
          <div className="pt-6 border-t border-slate-800 flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono text-slate-400 uppercase mr-2">
              Technology Stack Enablers:
            </span>
            {activeCase.techStack.map((tech, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-950 text-teal-300 border border-slate-800 text-xs font-mono"
              >
                <CheckCircle2 className="w-3 h-3 text-teal-400" />
                {tech}
              </span>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
