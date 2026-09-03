import React, { useState, useEffect, useRef } from 'react';
import { ILLUSTRATIVE_STATS } from '../data/dpiData';
import { Activity, Info } from 'lucide-react';

export default function StatsCounter() {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [counts, setCounts] = useState(ILLUSTRATIVE_STATS.map(() => 0));
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          
          // Animate numbers up to target
          const duration = 2000;
          const startTime = performance.now();

          const updateCounts = (currentTime) => {
            const elapsedTime = currentTime - startTime;
            const progress = Math.min(elapsedTime / duration, 1);
            
            // Ease out cubic
            const easeOut = 1 - Math.pow(1 - progress, 3);

            const nextCounts = ILLUSTRATIVE_STATS.map((stat) => 
              Math.floor(easeOut * stat.value)
            );

            setCounts(nextCounts);

            if (progress < 1) {
              requestAnimationFrame(updateCounts);
            } else {
              setCounts(ILLUSTRATIVE_STATS.map(s => s.value));
            }
          };

          requestAnimationFrame(updateCounts);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-[#0B1F3A] to-[#081628] relative overflow-hidden border-t border-b border-slate-800/80">
      
      {/* Background graphic */}
      <div className="absolute inset-0 bg-dots-pattern opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Disclaimer Pill */}
        <div className="flex items-center justify-between mb-10 pb-4 border-b border-slate-800/80">
          <div className="flex items-center gap-2 text-xs font-mono uppercase text-teal-400">
            <Activity className="w-4 h-4" /> Global Impact Projection Metrics
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 text-slate-400 text-[11px] font-mono border border-slate-800">
            <Info className="w-3 h-3 text-amber-400" /> Illustrative Reference Statistics
          </div>
        </div>

        {/* 4 Counter Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {ILLUSTRATIVE_STATS.map((stat, idx) => (
            <div
              key={stat.id}
              className="bg-slate-900/60 border border-slate-800 p-6 rounded-2xl backdrop-blur-md relative group hover:border-teal-500/40 transition-all"
            >
              <div className="text-4xl sm:text-5xl font-extrabold font-heading text-white tracking-tight mb-2 flex items-baseline">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-cyan-300 to-amber-300">
                  {counts[idx]}
                </span>
                <span className="text-teal-400 text-3xl ml-0.5">{stat.suffix}</span>
              </div>
              <h3 className="text-base font-bold font-heading text-slate-100 mb-1">
                {stat.label}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
