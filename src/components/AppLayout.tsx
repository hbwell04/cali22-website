import React from 'react';
import Navbar from '@/components/sections/Navbar';
import Hero from '@/components/sections/Hero';
import Features from '@/components/sections/Features';
import HowItWorks from '@/components/sections/HowItWorks';
import Screenshots from '@/components/sections/Screenshots';
import CTASection from '@/components/sections/CTASection';
import Footer from '@/components/sections/Footer';

const AppLayout: React.FC = () => {
  return (
    <div id="top-cta" className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Screenshots />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default AppLayout;
