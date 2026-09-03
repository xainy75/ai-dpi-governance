import React, { useState } from 'react';
import { INSIGHTS } from '../data/dpiData';
import { BookOpen, Search, Clock, Calendar, ArrowUpRight, X, User, Tag } from 'lucide-react';

export default function InsightsSection() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedArticle, setSelectedArticle] = useState(null);

  const categories = ['All', 'Policy & Ethics', 'Architecture', 'Case Analysis', 'Inclusion'];

  const filteredInsights = INSIGHTS.filter((item) => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="insights" className="py-24 bg-[#081628] relative overflow-hidden border-t border-slate-800/80">
      {/* Background glow */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono uppercase tracking-wider mb-4">
            <BookOpen className="w-3.5 h-3.5" /> Research & Policy Repository
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold font-heading text-white tracking-tight">
            Insights & <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-teal-300 to-cyan-300">Policy Notes</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg mt-4 leading-relaxed">
            Analytical briefs, governance frameworks, and technical papers addressing responsible AI integration on sovereign public infrastructure.
          </p>
        </div>

        {/* Filter Bar & Search Input */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12 bg-slate-900/60 p-3 rounded-2xl border border-slate-800 backdrop-blur-md">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  selectedCategory === cat
                    ? 'bg-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/20'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search research topics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-slate-950 text-slate-200 text-xs rounded-xl border border-slate-800 focus:outline-none focus:border-amber-500/50 transition-colors"
            />
          </div>

        </div>

        {/* Articles Grid */}
        {filteredInsights.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredInsights.map((article) => (
              <div
                key={article.id}
                onClick={() => setSelectedArticle(article)}
                className="bg-slate-900/50 hover:bg-slate-900/90 border border-slate-800 hover:border-amber-500/40 rounded-2xl p-6 transition-all duration-300 cursor-pointer flex flex-col justify-between group shadow-lg hover:-translate-y-1"
              >
                <div>
                  {/* Article Metadata Header */}
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-4">
                    <span className="font-mono text-amber-400 bg-amber-500/10 px-2.5 py-0.5 rounded-full border border-amber-500/20">
                      {article.category}
                    </span>
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-slate-500" /> {article.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-slate-500" /> {article.readTime}
                      </span>
                    </div>
                  </div>

                  {/* Title & Excerpt */}
                  <h3 className="text-xl font-bold font-heading text-white mb-3 group-hover:text-amber-300 transition-colors leading-snug">
                    {article.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed mb-6">
                    {article.excerpt}
                  </p>
                </div>

                {/* Article Footer */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs">
                  <span className="text-slate-400 flex items-center gap-1.5 font-medium">
                    <User className="w-3.5 h-3.5 text-teal-400" /> {article.author}
                  </span>
                  <span className="text-amber-400 font-semibold group-hover:underline flex items-center gap-1">
                    Read Article <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-slate-900/40 rounded-2xl border border-slate-800">
            <p className="text-slate-400 text-sm">No research papers match your current search query.</p>
            <button
              onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
              className="mt-3 text-xs text-amber-400 font-semibold hover:underline"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>

      {/* Full Article Reader Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in">
          <div 
            className="bg-[#0B1F3A] border border-amber-500/40 rounded-2xl max-w-3xl w-full p-6 sm:p-10 relative shadow-2xl overflow-y-auto max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedArticle(null)}
              className="absolute top-5 right-5 p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header Metadata */}
            <div className="flex items-center gap-3 text-xs text-slate-400 mb-4">
              <span className="font-mono text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20 font-semibold">
                {selectedArticle.category}
              </span>
              <span>•</span>
              <span>{selectedArticle.date}</span>
              <span>•</span>
              <span>{selectedArticle.readTime}</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold font-heading text-white mb-4">
              {selectedArticle.title}
            </h3>

            <div className="flex items-center gap-2 text-xs text-slate-300 pb-6 mb-6 border-b border-slate-800 font-medium">
              <User className="w-4 h-4 text-teal-400" />
              <span>By {selectedArticle.author}</span>
            </div>

            {/* Rendered Article Content */}
            <div className="prose prose-invert max-w-none text-slate-200 text-sm leading-relaxed space-y-4 font-sans">
              {selectedArticle.content.split('\n\n').map((paragraph, idx) => {
                if (paragraph.startsWith('### ')) {
                  return (
                    <h4 key={idx} className="text-lg font-bold font-heading text-amber-300 pt-3">
                      {paragraph.replace('### ', '')}
                    </h4>
                  );
                }
                return <p key={idx}>{paragraph}</p>;
              })}
            </div>

            {/* Modal Footer */}
            <div className="pt-8 mt-8 border-t border-slate-800 flex items-center justify-between">
              <div className="text-xs font-mono text-slate-400">
                AI for DPI Policy Repository Archive
              </div>
              <button
                onClick={() => setSelectedArticle(null)}
                className="px-5 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs shadow-md"
              >
                Close Article Reader
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
