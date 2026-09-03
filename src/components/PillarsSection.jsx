import React, { useState } from 'react';
import { DPI_PILLARS } from '../data/dpiData';
import { Fingerprint, CreditCard, Network, ArrowRight, ShieldAlert, Sparkles, CheckCircle2 } from 'lucide-react';

const iconMap = {
  Fingerprint: Fingerprint,
  CreditCard: CreditCard,
  Network: Network
};

export default function PillarsSection() {
  const [activePillarId, setActivePillarId] = useState('identity');
  const activePillar = DPI_PILLARS.find(p => p.id === activePillarId) || DPI_PILLARS[0];

  return (
    <section id="pillars" className="py-24 bg-[#081628] relative overflow-hidden border-t border-slate-800/80">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-teal-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-mono uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" /> Core Architectural Building Blocks
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold font-heading text-white tracking-tight">
            What is <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-300">DPI + AI</span>?
          </h2>
          <p className="text-slate-300 text-base sm:text-lg mt-4 leading-relaxed">
            Digital Public Infrastructure provides the non-proprietary digital highways for society. Integrating Artificial Intelligence creates a dynamic layer of intelligence, automation, and proactive security across all three foundational pillars.
          </p>
        </div>

        {/* 3 Pillar Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {DPI_PILLARS.map((pillar) => {
            const IconComponent = iconMap[pillar.icon] || Fingerprint;
            const isSelected = activePillarId === pillar.id;

            return (
              <div
                key={pillar.id}
                onClick={() => setActivePillarId(pillar.id)}
                className={`cursor-pointer rounded-2xl p-6 transition-all duration-300 relative group overflow-hidden ${
                  isSelected
                    ? 'bg-slate-900/90 border-2 border-teal-400/80 shadow-xl shadow-teal-500/10 scale-[1.02]'
                    : 'bg-slate-900/50 border border-slate-800 hover:border-slate-700 hover:bg-slate-900/70'
                }`}
              >
                {/* Active Indicator Top Bar */}
                {isSelected && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-400 to-cyan-400" />
                )}

                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br ${pillar.color} p-0.5 shadow-md`}>
                    <div className="w-full h-full bg-[#0B1F3A] rounded-[10px] flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-teal-300 group-hover:scale-110 transition-transform" />
                    </div>
                  </div>
                  <span className="text-[11px] font-mono uppercase px-2.5 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                    Pillar 0{DPI_PILLARS.indexOf(pillar) + 1}
                  </span>
                </div>

                <h3 className="text-xl font-bold font-heading text-white mb-1">
                  {pillar.title}
                </h3>
                <p className="text-xs font-medium text-teal-400 mb-3">
                  {pillar.subtitle}
                </p>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  {pillar.description}
                </p>

                <div className="pt-4 border-t border-slate-800/80">
                  <div className="flex items-center justify-between text-xs font-semibold text-teal-300">
                    <span>AI Enhancement Impact</span>
                    <ArrowRight className={`w-3.5 h-3.5 transition-transform ${isSelected ? 'translate-x-1' : ''}`} />
                  </div>
                  <p className="text-[11px] text-slate-400 mt-1 line-clamp-2">
                    {pillar.aiEnhancement}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Detailed Comparison Panel for Active Pillar */}
        <div className="rounded-2xl bg-slate-900/80 border border-teal-500/30 p-6 sm:p-8 backdrop-blur-md shadow-2xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 mb-6 border-b border-slate-800">
            <div>
              <span className="text-xs font-mono uppercase text-teal-400 tracking-wider">
                Pillar Deep Dive Breakdown
              </span>
              <h3 className="text-2xl font-bold font-heading text-white flex items-center gap-2 mt-1">
                {activePillar.title} <span className="text-slate-400 font-normal text-sm">({activePillar.subtitle})</span>
              </h3>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-teal-500/10 text-teal-300 text-xs font-medium border border-teal-500/20">
              <Sparkles className="w-3.5 h-3.5" /> AI Capabilities Layer Active
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Traditional DPI Column */}
            <div className="p-5 rounded-xl bg-slate-950/60 border border-slate-800/80">
              <div className="flex items-center gap-2 text-rose-400 font-semibold text-sm mb-3">
                <ShieldAlert className="w-4 h-4 shrink-0" />
                <span>Traditional DPI Stack Baseline</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                {activePillar.traditionalVsAi.traditional}
              </p>
              <div className="text-[11px] text-slate-400 bg-slate-900 p-3 rounded-lg border border-slate-800">
                <strong className="text-slate-300">Bottleneck:</strong> Manual data validation, batch audit delays, high administrative overhead, vulnerability to coordinated fraud.
              </div>
            </div>

            {/* AI-Enhanced DPI Column */}
            <div className="p-5 rounded-xl bg-gradient-to-br from-teal-950/40 to-slate-950/80 border border-teal-500/40">
              <div className="flex items-center gap-2 text-teal-300 font-semibold text-sm mb-3">
                <CheckCircle2 className="w-4 h-4 shrink-0 text-teal-400" />
                <span>AI-Layered Autonomous Governance</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed mb-4 font-medium">
                {activePillar.traditionalVsAi.aiEnhanced}
              </p>
              <div className="text-[11px] text-teal-200 bg-teal-950/40 p-3 rounded-lg border border-teal-500/30">
                <strong className="text-teal-300">Transformation:</strong> Sub-second automated verifications, real-time graph anomaly flags, zero-knowledge privacy preservation.
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
