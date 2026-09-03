import React from 'react';
import { PARTNERS } from '../data/dpiData';
import { ShieldCheck, Globe2 } from 'lucide-react';

export default function PartnersStrip() {
  return (
    <section className="py-12 bg-[#081628] border-t border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          
          <div className="flex items-center gap-2 text-xs font-mono uppercase text-slate-400 shrink-0">
            <Globe2 className="w-4 h-4 text-teal-400" />
            <span>Referenced By & Research Partners</span>
          </div>

          <div className="flex flex-wrap items-center justify-between md:justify-end gap-6 sm:gap-8">
            {PARTNERS.map((partner, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 group cursor-default text-slate-400 hover:text-teal-300 transition-colors"
              >
                <div className="w-2 h-2 rounded-full bg-slate-700 group-hover:bg-teal-400 transition-colors" />
                <span className="text-xs font-heading font-semibold tracking-wide">
                  {partner.name}
                </span>
                <span className="text-[10px] font-mono text-slate-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-800 hidden sm:inline">
                  {partner.category}
                </span>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
