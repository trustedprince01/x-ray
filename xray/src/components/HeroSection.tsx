import React from 'react';
import TweetForm from './TweetForm';
import { Bot, Twitter } from 'lucide-react';

export default function HeroSection() {
  return (
    <div className="flex flex-col items-center justify-center w-full max-w-4xl mx-auto px-4 md:px-6 mt-20 mb-16 relative z-10">
      {/* New AI Enhancement Badge */}
      <div className="inline-flex items-center px-3 py-1.5 bg-muted rounded-full mb-8 self-center">
        <Bot className="w-4 h-4 text-brand-orange mr-2" />
        <span className="text-xs font-medium text-brand-gray-text">New AI Enhancement</span>
      </div>
      
      {/* Main Headline */}
      <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 text-center tracking-tight">
        Analyze Twitter<br />Comment<br />Sections Instantly
      </h1>
      
      {/* Subheading */}
      <p className="text-lg md:text-xl text-brand-gray-text mb-10 text-center max-w-2xl">
        Paste a tweet URL and get a summarized analysis of the replies,
        debates, and mentions.
      </p>
      
      {/* Tweet Form */}
      <div className="w-full max-w-lg">
        <TweetForm />
      </div>

      {/* Twitter Screenshots on both sides - visible on larger screens */}
      <div className="hidden md:block absolute left-0 transform -translate-x-full top-0">
        <div className="flex flex-col gap-4">
          <div className="bg-muted p-4 rounded-xl hover:scale-[1.02] transition-transform shadow-lg">
            <img src="/images/13b96032-1d7a-44b9-8afc-c390afe658c9.png" 
                 alt="Twitter discussion" 
                 className="w-64 rounded-lg" />
          </div>
          <div className="bg-muted p-4 rounded-xl hover:scale-[1.02] transition-transform shadow-lg">
            <img src="/images/2901b83f-9a2e-47f5-a3a2-e419150250b2.png" 
                 alt="Twitter discussion" 
                 className="w-64 rounded-lg" />
          </div>
        </div>
      </div>

      <div className="hidden md:block absolute right-0 transform translate-x-full top-0">
        <div className="flex flex-col gap-4">
          <div className="bg-muted p-4 rounded-xl hover:scale-[1.02] transition-transform shadow-lg">
            <img src="/images/d0cde4c3-802a-4d0e-bd94-e0a13f40ec5a.png" 
                 alt="Twitter discussion" 
                 className="w-64 rounded-lg" />
          </div>
        </div>
      </div>
      
      {/* Mobile tweet examples - only visible on small screens */}
      <div className="grid grid-cols-1 gap-4 mt-8 w-full md:hidden">
        <div className="bg-muted p-3 rounded-xl hover:scale-[1.02] transition-transform shadow-lg max-w-xs mx-auto">
          <img src="/images/13b96032-1d7a-44b9-8afc-c390afe658c9.png" 
               alt="Twitter discussion" 
               className="w-full rounded-lg" />
        </div>
      </div>
      
      {/* Built by section */}
      <div className="mt-10 flex items-center justify-center">
        <p className="text-brand-gray-text">Built by</p>
        <a 
          href="https://x.com/JokerElon" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-brand-orange hover:text-brand-orange-hover ml-2 flex items-center font-medium transition-colors"
        >
          Prince
          <Twitter className="w-4 h-4 ml-1 inline-block" />
        </a>
      </div>
    </div>
  );
}