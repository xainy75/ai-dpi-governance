import React, { useState } from 'react';
import { Send, CheckCircle2, Mail, Building, User, MessageSquare, Sparkles, AlertCircle } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    topic: 'Research Collaboration',
    message: ''
  });

  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.organization.trim()) newErrors.organization = 'Organization is required';
    if (!formData.message.trim()) newErrors.message = 'Please provide a message or inquiry summary';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Show functional UI success state
      setFormSubmitted(true);
    }
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (newsletterEmail && /\S+@\S+\.\S+/.test(newsletterEmail)) {
      setNewsletterSuccess(true);
      setNewsletterEmail('');
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#0B1F3A] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-teal-500/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Mission Call & Newsletter Card (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-mono uppercase tracking-wider mb-4">
                <Mail className="w-3.5 h-3.5" /> Partner & Policy Engagement
              </div>
              <h2 className="text-3xl sm:text-5xl font-bold font-heading text-white tracking-tight">
                Get Involved in <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-amber-300">AI-DPI Governance</span>
              </h2>
              <p className="text-slate-300 text-base mt-4 leading-relaxed">
                Whether you are a government minister, civic technologist, multilateral donor, or AI researcher—collaborate with us to architect trustworthy public infrastructure.
              </p>
            </div>

            {/* Newsletter Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 border border-teal-500/30 shadow-xl">
              <div className="flex items-center gap-2 text-amber-400 font-semibold text-sm mb-2">
                <Sparkles className="w-4 h-4" />
                <span>Subscribe to AI-DPI Policy Briefs</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Receive monthly updates on sovereign AI blueprints, fraud prevention case studies, and digital identity policy releases.
              </p>

              {newsletterSuccess ? (
                <div className="p-3.5 rounded-xl bg-teal-950/60 border border-teal-500/40 text-teal-300 text-xs font-medium flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Thank you for subscribing! Check your inbox for our latest policy release.</span>
                </div>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Enter your work email..."
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    required
                    className="flex-1 bg-slate-950 text-slate-200 text-xs rounded-xl px-4 py-2.5 border border-slate-800 focus:outline-none focus:border-teal-500 transition-colors"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs rounded-xl transition-all shadow-md shrink-0"
                  >
                    Subscribe
                  </button>
                </form>
              )}
            </div>

            <div className="p-5 rounded-2xl bg-slate-900/40 border border-slate-800/80 text-xs text-slate-400 space-y-2">
              <div className="font-mono text-slate-300 uppercase">Direct Institutional Contact</div>
              <div>Email: <a href="mailto:contact@ai-dpi-governance.org" className="text-teal-400 hover:underline">contact@ai-dpi-governance.org</a></div>
              <div>HQ Office: Islamabad • Geneva • Washington D.C.</div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form (7 cols) */}
          <div className="lg:col-span-7 bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-10 backdrop-blur-md shadow-2xl">
            
            {formSubmitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-teal-500/20 text-teal-400 flex items-center justify-center mx-auto border border-teal-500/40">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold font-heading text-white">
                  Inquiry Received Successfully!
                </h3>
                <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="text-teal-300 font-semibold">{formData.name}</span>. Our policy and technical team will review your message regarding <span className="text-amber-300 font-semibold">{formData.topic}</span> and reach out within 24 business hours.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({ name: '', email: '', organization: '', topic: 'Research Collaboration', message: '' });
                    }}
                    className="px-6 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <h3 className="text-xl font-bold font-heading text-white mb-1">
                    Send an Inquiry or Partnership Request
                  </h3>
                  <p className="text-xs text-slate-400 mb-6">
                    Connect with our technical implementation team to discuss advisory services, pilot programs, or research papers.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name Input */}
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5 flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-teal-400" /> Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Dr. Ali Raza"
                      className={`w-full px-4 py-2.5 bg-slate-950 text-slate-100 text-xs rounded-xl border ${
                        errors.name ? 'border-rose-500' : 'border-slate-800 focus:border-teal-500'
                      } focus:outline-none transition-colors`}
                    />
                    {errors.name && (
                      <span className="text-[11px] text-rose-400 flex items-center gap-1 mt-1 font-mono">
                        <AlertCircle className="w-3 h-3" /> {errors.name}
                      </span>
                    )}
                  </div>

                  {/* Email Input */}
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5 flex items-center gap-1.5">
                      <Mail className="w-3.5 h-3.5 text-teal-400" /> Official Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="name@ministry.gov.pk"
                      className={`w-full px-4 py-2.5 bg-slate-950 text-slate-100 text-xs rounded-xl border ${
                        errors.email ? 'border-rose-500' : 'border-slate-800 focus:border-teal-500'
                      } focus:outline-none transition-colors`}
                    />
                    {errors.email && (
                      <span className="text-[11px] text-rose-400 flex items-center gap-1 mt-1 font-mono">
                        <AlertCircle className="w-3 h-3" /> {errors.email}
                      </span>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Organization */}
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5 flex items-center gap-1.5">
                      <Building className="w-3.5 h-3.5 text-teal-400" /> Organization / Entity *
                    </label>
                    <input
                      type="text"
                      name="organization"
                      value={formData.organization}
                      onChange={handleInputChange}
                      placeholder="e.g. Ministry of IT / World Bank"
                      className={`w-full px-4 py-2.5 bg-slate-950 text-slate-100 text-xs rounded-xl border ${
                        errors.organization ? 'border-rose-500' : 'border-slate-800 focus:border-teal-500'
                      } focus:outline-none transition-colors`}
                    />
                    {errors.organization && (
                      <span className="text-[11px] text-rose-400 flex items-center gap-1 mt-1 font-mono">
                        <AlertCircle className="w-3 h-3" /> {errors.organization}
                      </span>
                    )}
                  </div>

                  {/* Topic Select */}
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5 flex items-center gap-1.5">
                      <MessageSquare className="w-3.5 h-3.5 text-teal-400" /> Inquiry Topic
                    </label>
                    <select
                      name="topic"
                      value={formData.topic}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 bg-slate-950 text-slate-100 text-xs rounded-xl border border-slate-800 focus:border-teal-500 focus:outline-none transition-colors"
                    >
                      <option value="Research Collaboration">Research & Paper Co-authorship</option>
                      <option value="DPI Technical Advisory">DPI Technical & AI Architecture Advisory</option>
                      <option value="Case Study Submission">Case Study or Country Profile Submission</option>
                      <option value="Speaking & Events">Keynote & Panel Engagement</option>
                    </select>
                  </div>
                </div>

                {/* Message Textarea */}
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5">
                    Project Context or Message Details *
                  </label>
                  <textarea
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Briefly describe your institution's DPI deployment goals, technical questions, or collaboration proposal..."
                    className={`w-full px-4 py-2.5 bg-slate-950 text-slate-100 text-xs rounded-xl border ${
                      errors.message ? 'border-rose-500' : 'border-slate-800 focus:border-teal-500'
                    } focus:outline-none transition-colors`}
                  />
                  {errors.message && (
                    <span className="text-[11px] text-rose-400 flex items-center gap-1 mt-1 font-mono">
                      <AlertCircle className="w-3 h-3" /> {errors.message}
                    </span>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-sm transition-all shadow-lg shadow-amber-500/20 flex items-center justify-center gap-2 active:scale-[0.99]"
                >
                  <Send className="w-4 h-4 text-slate-950" />
                  Submit Inquiry
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
