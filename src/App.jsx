import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PillarsSection from './components/PillarsSection';
import UseCasesGrid from './components/UseCasesGrid';
import FrameworkDiagram from './components/FrameworkDiagram';
import CaseStudiesSection from './components/CaseStudiesSection';
import InsightsSection from './components/InsightsSection';
import StatsCounter from './components/StatsCounter';
import AboutTeamSection from './components/AboutTeamSection';
import PartnersStrip from './components/PartnersStrip';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0B1F3A] text-slate-100 font-sans selection:bg-teal-500 selection:text-white">
      {/* Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        <Hero />
        <PartnersStrip />
        <PillarsSection />
        <UseCasesGrid />
        <FrameworkDiagram />
        <CaseStudiesSection />
        <StatsCounter />
        <InsightsSection />
        <AboutTeamSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
