import React from 'react';
import { Cpu, ShieldCheck, Heart, Code2, Share2, Globe, ExternalLink } from 'lucide-react';
import { NAV_LINKS } from '../data/dpiData';

export default function Footer() {
  return (
    <footer className="bg-[#061221] border-t border-slate-800 text-slate-400 py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Col 1: Brand & Mission (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-teal-400 to-cyan-600 p-0.5 shadow-md">
                <div className="w-full h-full bg-[#0B1F3A] rounded-[10px] flex items-center justify-center">
                  <Cpu className="w-5 h-5 text-teal-400" />
                </div>
              </div>
              <span className="font-heading font-bold text-xl text-white tracking-tight">
                AI for <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-300">DPI</span> & Governance
              </span>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              An open civic technology initiative advancing trustworthy, sovereign Artificial Intelligence integration over foundational Digital Public Infrastructure (Identity, Payments, Data Exchange).
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub Repository" className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-teal-300 hover:border-teal-500/40 transition-colors">
                <Code2 className="w-4 h-4" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Community Network" className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-teal-300 hover:border-teal-500/40 transition-colors">
                <Share2 className="w-4 h-4" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="Global Network" className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-teal-300 hover:border-teal-500/40 transition-colors">
                <Globe className="w-4 h-4" />
              </a>
            </div>
          </div>


          {/* Col 2: Quick Sitemap Links (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-xs font-mono uppercase text-teal-400 font-semibold tracking-wider block">
              Navigation Sitemap
            </span>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="hover:text-teal-300 transition-colors py-1 flex items-center gap-1"
                >
                  <span>›</span> {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Col 3: Legal & Standards (3 cols) */}
          <div className="md:col-span-3 space-y-3 text-xs">
            <span className="text-xs font-mono uppercase text-teal-400 font-semibold tracking-wider block">
              Standards & Open Source
            </span>
            <ul className="space-y-2 text-slate-400">
              <li className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer">
                <ExternalLink className="w-3 h-3 text-teal-400" /> Digital Public Goods Standard
              </li>
              <li className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer">
                <ExternalLink className="w-3 h-3 text-teal-400" /> Open Source Code Licenses
              </li>
              <li className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer">
                <ExternalLink className="w-3 h-3 text-teal-400" /> Privacy & Consent Policy
              </li>
              <li className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer">
                <ExternalLink className="w-3 h-3 text-teal-400" /> Accessibility Statement
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Mandatory Disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© {new Date().getFullYear()} AI for Digital Public Infrastructure & Governance. All Rights Reserved.</p>
          <div className="text-[11px] text-slate-400 bg-slate-900/60 px-3 py-1.5 rounded-lg border border-slate-800 max-w-lg text-center sm:text-right">
            <strong className="text-amber-400 font-mono">Disclaimer:</strong> Content and metrics presented on this platform are structured for research, policy demonstration, and illustrative evaluation purposes.
          </div>
        </div>

      </div>
    </footer>
  );
}
