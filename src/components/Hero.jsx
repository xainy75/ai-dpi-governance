import React, { useEffect, useRef } from 'react';
import { Shield, Sparkles, ArrowRight, BookOpen, Layers, CheckCircle2, Globe } from 'lucide-react';

export default function Hero() {
  const canvasRef = useRef(null);

  // Interactive Background Canvas: Node Network & Pulsing Data Packets
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const setCanvasSize = () => {
      canvas.width = canvas.parentElement.offsetWidth;
      canvas.height = canvas.parentElement.offsetHeight;
    };
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    // Node particle setup
    const nodeCount = Math.floor(Math.min(canvas.width / 18, 55));
    const nodes = Array.from({ length: nodeCount }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      radius: Math.random() * 2 + 1.5,
      isPulse: Math.random() > 0.75,
      pulsePhase: Math.random() * Math.PI * 2
    }));

    // Render loop
    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw faint grid lines
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.025)';
      ctx.lineWidth = 1;
      const gridSize = 60;
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Update & draw connection lines
      for (let i = 0; i < nodes.length; i++) {
        const nodeA = nodes[i];
        nodeA.x += nodeA.vx;
        nodeA.y += nodeA.vy;

        if (nodeA.x < 0 || nodeA.x > canvas.width) nodeA.vx *= -1;
        if (nodeA.y < 0 || nodeA.y > canvas.height) nodeA.vy *= -1;

        for (let j = i + 1; j < nodes.length; j++) {
          const nodeB = nodes[j];
          const dx = nodeA.x - nodeB.x;
          const dy = nodeA.y - nodeB.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 140) {
            const alpha = (1 - dist / 140) * 0.25;
            ctx.strokeStyle = `rgba(20, 184, 166, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(nodeA.x, nodeA.y);
            ctx.lineTo(nodeB.x, nodeB.y);
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      nodes.forEach((node) => {
        ctx.fillStyle = node.isPulse ? '#14B8A6' : '#38BDF8';
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fill();

        if (node.isPulse) {
          node.pulsePhase += 0.03;
          const glow = (Math.sin(node.pulsePhase) + 1) * 4 + 2;
          ctx.strokeStyle = 'rgba(20, 184, 166, 0.4)';
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.arc(node.x, node.y, node.radius + glow, 0, Math.PI * 2);
          ctx.stroke();
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-[#0B1F3A]">
      {/* Background Canvas & Lighting Effects */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-0" />
      
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-teal-500/15 via-cyan-500/10 to-indigo-500/0 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-amber-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Top Announcement Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-teal-500/30 text-slate-200 text-xs font-medium mb-8 backdrop-blur-md shadow-lg shadow-teal-500/5 animate-fade-in">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
          </span>
          <span className="text-teal-300 font-semibold">Civic AI Governance Blueprint</span>
          <span className="text-slate-500">•</span>
          <span className="text-slate-300 flex items-center gap-1">
            <Globe className="w-3 h-3 text-cyan-400" /> Focus on Emerging Economies & Pakistan
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold font-heading text-white tracking-tight leading-[1.1] max-w-5xl mx-auto mb-6">
          Building Trustworthy <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-cyan-300 to-indigo-300">AI</span> on Digital Public Infrastructure
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed font-normal">
          An open framework and knowledge hub integrating artificial intelligence with foundational DPI stacks—digital identity, instant payments, and consent data exchange—to deliver fraud-resistant, inclusive civic services at national scale.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="#framework"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-bold text-base hover:from-amber-400 hover:to-amber-500 transition-all shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 hover:-translate-y-0.5 active:translate-y-0"
          >
            <Layers className="w-5 h-5 text-slate-950" />
            Explore the Framework
            <ArrowRight className="w-4 h-4 text-slate-950" />
          </a>

          <a
            href="#insights"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-slate-900/90 text-slate-100 font-semibold text-base border border-slate-700/80 hover:bg-slate-800 hover:border-teal-500/40 transition-all shadow-md backdrop-blur-sm hover:-translate-y-0.5"
          >
            <BookOpen className="w-5 h-5 text-teal-400" />
            Read the Research
          </a>
        </div>

        {/* Trust & Key Principles Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto pt-8 border-t border-slate-800/80">
          <div className="flex items-center justify-center gap-2.5 p-3 rounded-lg bg-slate-900/40 border border-slate-800/50">
            <Shield className="w-4 h-4 text-teal-400 shrink-0" />
            <span className="text-xs text-slate-300 font-medium text-left">Sovereign Biometric AI</span>
          </div>

          <div className="flex items-center justify-center gap-2.5 p-3 rounded-lg bg-slate-900/40 border border-slate-800/50">
            <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
            <span className="text-xs text-slate-300 font-medium text-left">Fraud-Resistant Payouts</span>
          </div>

          <div className="flex items-center justify-center gap-2.5 p-3 rounded-lg bg-slate-900/40 border border-slate-800/50">
            <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
            <span className="text-xs text-slate-300 font-medium text-left">Multilingual Dialect Voice</span>
          </div>

          <div className="flex items-center justify-center gap-2.5 p-3 rounded-lg bg-slate-900/40 border border-slate-800/50">
            <Layers className="w-4 h-4 text-indigo-400 shrink-0" />
            <span className="text-xs text-slate-300 font-medium text-left">Consent Data Exchange</span>
          </div>
        </div>

      </div>
    </section>
  );
}
