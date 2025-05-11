
import React from 'react';

export default function TrustedBy() {
  return (
    <div className="mt-16 animate-fade-in">
      <p className="text-center text-sm text-brand-gray-text mb-6">Trusted by</p>
      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
        {[1, 2, 3, 4, 5].map((index) => (
          <div key={index} className="w-24 h-8 bg-muted/40 rounded-md animate-pulse-light"></div>
        ))}
      </div>
    </div>
  );
}
