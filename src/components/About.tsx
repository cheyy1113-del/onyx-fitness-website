import React from 'react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-14 relative overflow-hidden bg-[#050505] border-t border-[#1F1F1F]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        <span className="text-xs font-black uppercase tracking-[0.25em] text-[#E50914] font-display">
          ABOUT ONYX
        </span>
        
        <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white font-display mt-2 mb-4">
          ABOUT ONYX
        </h2>
        
        <div className="h-1.5 w-16 bg-[#E50914] mx-auto mb-6 rounded-full" />

        <div className="bg-[#0D0D0D] border border-[#1F1F1F] p-8 sm:p-10 rounded-3xl shadow-2xl text-left space-y-4">
          <p className="text-zinc-100 text-lg sm:text-xl font-medium leading-relaxed">
            ONYX The Professional Fitness Studio is a focused training space combining gym access, personal training and Pilates under one roof.
          </p>
          <p className="text-zinc-300 text-base sm:text-lg leading-relaxed">
            Our goal is simple — provide professional guidance, quality training and an environment where you can train consistently.
          </p>
        </div>

      </div>
    </section>
  );
};
