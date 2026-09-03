import React, { useState } from 'react';
import { USE_CASES } from '../data/dpiData';
import { 
  Scan, 
  ShieldCheck, 
  MessageSquareText, 
  TrendingUp, 
  FileCode2, 
  LayoutDashboard, 
  X, 
  CheckCircle2, 
  ArrowUpRight, 
  Layers, 
  Cpu
} from 'lucide-react';

const iconMap = {
  Scan: Scan,
  ShieldCheck: ShieldCheck,
  MessageSquareText: MessageSquareText,
  TrendingUp: TrendingUp,
  FileCode2: FileCode2,
  LayoutDashboard: LayoutDashboard
};

export default function UseCasesGrid() {
  const [selectedUseCase, setSelectedUseCase] = useState(null);

  return (
    <section id="use-cases" className="py-24 bg-[#0B1F3A] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-4">
            <Cpu className="w-3.5 h-3.5" /> High-Impact Deployments
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold font-heading text-white tracking-tight">
            Real-World <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-300">AI + DPI Use Cases</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg mt-4 leading-relaxed">
            Discover how machine learning layers solve critical administrative challenges across digital identity, G2P payment security, multilingual citizen access, and evidence-based governance.
          </p>
        </div>

        {/* 6 Use Case Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {USE_CASES.map((item) => {
            const IconComp = iconMap[item.icon] || Scan;
            return (
              <div
                key={item.id}
                onClick={() => setSelectedUseCase(item)}
                className="bg-slate-900/60 hover:bg-slate-900/90 border border-slate-800 hover:border-teal-500/40 rounded-2xl p-6 transition-all duration-300 cursor-pointer flex flex-col justify-between group shadow-lg hover:shadow-xl hover:shadow-teal-500/5 hover:-translate-y-1"
              >
                <div>
                  {/* Icon & Badge Header */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700/60 flex items-center justify-center group-hover:border-teal-500/50 group-hover:bg-teal-500/10 transition-colors">
                      <IconComp className="w-6 h-6 text-teal-400 group-hover:scale-110 transition-transform" />
                    </div>
                    <span className="text-[11px] font-mono font-medium px-2.5 py-1 rounded-full bg-slate-800 text-cyan-300 border border-slate-700">
                      {item.badge}
                    </span>
                  </div>

                  {/* Title & Short Description */}
                  <h3 className="text-xl font-bold font-heading text-white mb-2 group-hover:text-teal-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed mb-6">
                    {item.shortDesc}
                  </p>
                </div>

                {/* Card Footer Action */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <span className="text-xs font-semibold text-teal-400 group-hover:underline flex items-center gap-1">
                    Inspect Technical Blueprint
                  </span>
                  <div className="w-7 h-7 rounded-full bg-slate-800 group-hover:bg-teal-500 group-hover:text-slate-950 text-slate-300 flex items-center justify-center transition-all">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Modal Popup for Selected Use Case */}
      {selectedUseCase && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in">
          <div 
            className="bg-[#0D2444] border border-teal-500/40 rounded-2xl max-w-2xl w-full p-6 sm:p-8 relative shadow-2xl overflow-y-auto max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedUseCase(null)}
              className="absolute top-5 right-5 p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-teal-500/20 border border-teal-500/40 flex items-center justify-center">
                {React.createElement(iconMap[selectedUseCase.icon] || Scan, { className: "w-5 h-5 text-teal-300" })}
              </div>
              <div>
                <span className="text-xs font-mono uppercase text-teal-400 font-medium">
                  {selectedUseCase.badge}
                </span>
                <h3 className="text-2xl font-bold font-heading text-white">
                  {selectedUseCase.title}
                </h3>
              </div>
            </div>

            <p className="text-sm text-slate-200 leading-relaxed mb-6 pt-2 border-t border-slate-800">
              {selectedUseCase.fullDesc}
            </p>

            {/* Impact Metric Banner */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-teal-950/60 to-slate-900 border border-teal-500/30 mb-6">
              <span className="text-[11px] font-mono uppercase text-teal-400 block mb-1">
                Measured / Estimated Civic Impact
              </span>
              <p className="text-sm font-semibold text-white">
                {selectedUseCase.impact}
              </p>
            </div>

            {/* Tech Stack & Integration Layer */}
            <div className="space-y-4 mb-6">
              <div>
                <span className="text-xs font-mono text-slate-400 uppercase block mb-1">
                  Stack Integration Vector
                </span>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-cyan-300">
                  <Layers className="w-3.5 h-3.5 text-cyan-400" /> {selectedUseCase.layer}
                </div>
              </div>

              <div>
                <span className="text-xs font-mono text-slate-400 uppercase block mb-2">
                  Key Prerequisites & Safeguards
                </span>
                <div className="space-y-2">
                  {selectedUseCase.prerequisites.map((req, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                      <span>{req}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="pt-4 border-t border-slate-800 flex justify-end">
              <button
                onClick={() => setSelectedUseCase(null)}
                className="px-5 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold"
              >
                Close Technical View
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
