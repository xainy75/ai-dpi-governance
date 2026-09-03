import React from 'react';
import { TEAM_MEMBERS } from '../data/dpiData';
import { Users, Shield, Lock, Eye, Sparkles } from 'lucide-react';

export default function AboutTeamSection() {
  return (
    <section id="about" className="py-24 bg-[#0B1F3A] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-indigo-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-mono uppercase tracking-wider mb-4">
            <Users className="w-3.5 h-3.5" /> Mission & Stewardship
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold font-heading text-white tracking-tight">
            About the <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-300">AI-DPI Initiative</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg mt-4 leading-relaxed">
            We are a global think-tank and open-source civic tech collective bridging state-of-the-art artificial intelligence research with sovereign digital public infrastructure.
          </p>
        </div>

        {/* 3 Core Guiding Principles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800">
            <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center mb-4">
              <Shield className="w-5 h-5 text-teal-400" />
            </div>
            <h3 className="text-lg font-bold font-heading text-white mb-2">
              National Data Sovereignty
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Public sector AI must run within sovereign cloud boundaries or open-weight local infrastructure, preventing external reliance or vendor lock-in.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center mb-4">
              <Lock className="w-5 h-5 text-cyan-400" />
            </div>
            <h3 className="text-lg font-bold font-heading text-white mb-2">
              Consent-First Architecture
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Citizen privacy is paramount. Machine learning models must verify credentials and anomalies using zero-knowledge protocols without centralizing raw identity logs.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center mb-4">
              <Eye className="w-5 h-5 text-amber-400" />
            </div>
            <h3 className="text-lg font-bold font-heading text-white mb-2">
              Algorithmic Transparency
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Every automated decision impacting citizen welfare payouts or digital ID status must feature clear explainability logs and accessible human-in-the-loop appeal channels.
            </p>
          </div>
        </div>

        {/* Team Header */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold font-heading text-white">
            Leadership & Technical Advisory Board
          </h3>
          <p className="text-xs text-slate-400 mt-1">
            Engineers, civic tech researchers, and policy advisors guiding responsible DPI innovation.
          </p>
        </div>

        {/* Team Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TEAM_MEMBERS.map((member, idx) => (
            <div
              key={idx}
              className="bg-slate-900/60 border border-slate-800 hover:border-teal-500/40 rounded-2xl p-6 transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="w-20 h-20 rounded-2xl overflow-hidden mb-4 border border-slate-700 bg-slate-800 mx-auto sm:mx-0">
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
              </div>

              <h4 className="text-base font-bold font-heading text-white mb-0.5">
                {member.name}
              </h4>
              <p className="text-xs text-teal-400 font-medium mb-3">
                {member.role}
              </p>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                {member.bio}
              </p>

              <span className="inline-block text-[11px] font-mono px-2.5 py-1 rounded-md bg-slate-950 text-cyan-300 border border-slate-800">
                {member.specialty}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
