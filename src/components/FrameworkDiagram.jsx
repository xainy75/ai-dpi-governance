import React, { useState } from 'react';
import { FRAMEWORK_LAYERS } from '../data/dpiData';
import { Layers, ShieldCheck, Cpu, Database, CheckCircle2, Info, ArrowDown, Activity } from 'lucide-react';

export default function FrameworkDiagram() {
  const [activeLayerId, setActiveLayerId] = useState('ai-ml');
  const activeLayer = FRAMEWORK_LAYERS.find(l => l.id === activeLayerId) || FRAMEWORK_LAYERS[0];

  return (
    <section id="framework" className="py-24 bg-[#081628] relative overflow-hidden border-t border-b border-slate-800/80">
      {/* Background glow and grid overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-r from-teal-500/10 via-cyan-500/10 to-indigo-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono uppercase tracking-wider mb-4">
            <Layers className="w-3.5 h-3.5" /> Architectural Reference Model
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold font-heading text-white tracking-tight">
            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-300 to-amber-300">AI + DPI Stack Architecture</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg mt-4 leading-relaxed">
            A non-proprietary modular framework illustrating how machine learning models sit directly on top of foundational open DPI rails, bounded by non-negotiable governance and privacy guardrails.
          </p>
        </div>

        {/* Main Grid: Interactive Layered Stack + Live Inspector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Layered Stack (8 cols) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center justify-between px-2 text-xs font-mono text-slate-400 mb-2">
              <span>Stack Order: Top-Down Hierarchy</span>
              <span className="text-teal-400 flex items-center gap-1">
                <Activity className="w-3 h-3 animate-pulse" /> Click layer to inspect
              </span>
            </div>

            {FRAMEWORK_LAYERS.map((layer) => {
              const isSelected = activeLayerId === layer.id;

              return (
                <div
                  key={layer.id}
                  onClick={() => setActiveLayerId(layer.id)}
                  className={`cursor-pointer rounded-2xl p-5 sm:p-6 transition-all duration-300 relative overflow-hidden border ${
                    isSelected
                      ? `bg-slate-900/90 ${layer.borderColor} shadow-2xl shadow-teal-500/10 scale-[1.01]`
                      : 'bg-slate-900/40 border-slate-800 hover:border-slate-700 hover:bg-slate-900/70'
                  }`}
                >
                  {/* Visual Background Gradient Accent */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${layer.color} opacity-20 pointer-events-none`} />

                  <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-start sm:items-center gap-4">
                      <span className={`text-sm font-mono font-bold px-3 py-1.5 rounded-lg ${layer.badgeBg} border`}>
                        L{layer.number}
                      </span>
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold font-heading text-white">
                          {layer.name}
                        </h3>
                        <p className="text-xs text-slate-300 mt-1 line-clamp-1">
                          {layer.description}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-xs font-semibold text-slate-300 shrink-0">
                      <span className={isSelected ? layer.textColor : 'text-slate-400'}>
                        {isSelected ? 'Inspecting' : 'Inspect'}
                      </span>
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center ${isSelected ? 'bg-teal-500 text-slate-950' : 'bg-slate-800 text-slate-400'}`}>
                        →
                      </div>
                    </div>
                  </div>

                  {/* Component Badges Preview */}
                  <div className="relative z-10 flex flex-wrap gap-2 mt-4 pt-3 border-t border-slate-800/80">
                    {layer.components.map((comp, idx) => (
                      <span
                        key={idx}
                        className={`text-[11px] font-mono px-2.5 py-0.5 rounded-md border transition-all ${
                          isSelected
                            ? 'bg-slate-800/90 text-slate-200 border-slate-700'
                            : 'bg-slate-950/40 text-slate-400 border-slate-800'
                        }`}
                      >
                        {comp}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}

            <div className="flex items-center justify-center gap-2 py-2 text-xs font-mono text-slate-400">
              <ArrowDown className="w-4 h-4 text-teal-400 animate-bounce" />
              <span>Bi-directional Data & Verification Flows</span>
            </div>
          </div>

          {/* Right Column: Layer Detail Inspector Panel (5 cols) */}
          <div className="lg:col-span-5">
            <div className="sticky top-28 bg-slate-900/90 border border-teal-500/30 rounded-2xl p-6 sm:p-8 backdrop-blur-md shadow-2xl">
              
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <span className={`text-xs font-mono font-bold px-2.5 py-1 rounded-md ${activeLayer.badgeBg} border`}>
                    LAYER {activeLayer.number}
                  </span>
                  <span className="text-xs text-slate-400 font-mono">SPECIFICATION</span>
                </div>
                <div className="w-2.5 h-2.5 rounded-full bg-teal-400 animate-ping" />
              </div>

              <h3 className="text-2xl font-bold font-heading text-white mb-2">
                {activeLayer.name}
              </h3>
              
              <p className="text-xs text-slate-300 leading-relaxed mb-6">
                {activeLayer.description}
              </p>

              {/* Sub-Components List */}
              <div className="space-y-4 mb-6">
                <span className="text-xs font-mono uppercase text-teal-400 block tracking-wider font-semibold">
                  Modular Core Components
                </span>
                
                <div className="space-y-2.5">
                  {activeLayer.components.map((comp, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-slate-950/70 border border-slate-800 flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                      <div>
                        <span className="text-xs font-semibold text-slate-100 block">{comp}</span>
                        <span className="text-[11px] text-slate-400">Sovereign API compliant & open-spec standard.</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Architectural Interoperability Spec */}
              <div className="p-4 rounded-xl bg-teal-950/30 border border-teal-500/30 text-xs text-teal-200">
                <div className="flex items-center gap-2 font-mono text-teal-300 font-semibold mb-1">
                  <Info className="w-3.5 h-3.5" />
                  <span>Interoperability Guarantee</span>
                </div>
                Designed to interface seamlessly with existing public registries without requiring total legacy system overhauls.
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
