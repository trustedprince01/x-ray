
import React from 'react';

interface TweetExampleProps {
  avatarSrc: string;
  name: string;
  username: string;
  content: string;
}

export default function TweetExample({ avatarSrc, name, username, content }: TweetExampleProps) {
  return (
    <div className="bg-muted/30 backdrop-blur-sm p-4 rounded-xl border border-white/10 transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
      <div className="flex items-center gap-3 mb-3">
        <img 
          src={avatarSrc} 
          alt={`${name}'s avatar`} 
          className="w-10 h-10 rounded-full object-cover"
        />
        <div className="flex flex-col">
          <div className="flex items-center gap-1">
            <span className="font-semibold text-white">{name}</span>
            <svg className="w-4 h-4 text-blue-500 fill-current" viewBox="0 0 24 24">
              <path d="M22.5 12.5c0-5.52-4.48-10-10-10s-10 4.48-10 10 4.48 10 10 10 10-4.48 10-10zm-10 6.5c-3.59 0-6.5-2.91-6.5-6.5s2.91-6.5 6.5-6.5 6.5 2.91 6.5 6.5-2.91 6.5-6.5 6.5zm-1.5-5l-3-3 1.5-1.5 1.5 1.5 3.5-3.5 1.5 1.5-5 5z" />
            </svg>
          </div>
          <span className="text-brand-gray-text text-sm">{username}</span>
        </div>
      </div>
      <p className="text-white text-sm md:text-base">{content}</p>
    </div>
  );
}
