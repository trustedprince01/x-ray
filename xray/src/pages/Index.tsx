
import React from 'react';
import Logo from '@/components/Logo';
import HeroSection from '@/components/HeroSection';

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-x-hidden bg-brand-dark">
      {/* Dotted pattern overlay */}
      <div className="dot-pattern-overlay"></div>
      
      {/* Content container */}
      <div className="relative z-10 container mx-auto px-4 pb-20">
        {/* Navigation */}
        <div className="py-6 flex justify-between items-center">
          <Logo />
        </div>
        
        {/* Hero Section */}
        <HeroSection />
      </div>
    </div>
  );
}

export default Index;
