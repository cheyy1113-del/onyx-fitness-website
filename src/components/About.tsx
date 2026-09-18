import React from 'react';
import { Target, ShieldCheck, Zap } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-16 relative overflow-hidden bg-[#050505] border-t border-[#1F1F1F]">
      {/* Subtle Ambient Red Glow */}
      <div className="ambient-glow-left" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Category Pill Tag */}
        <div className="inline-flex items-center space-x-2 bg-[#0D0D0D] border border-[#E50914]/40 px-4 py-1.5 rounded-full mb-3 shadow-red-glow">
          <Zap className="w-3.5 h-3.5 text-[#E50914]" />
          <span className="text-xs font-black uppercase tracking-[0.25em] text-[#E50914] font-display">
            ABOUT ONYX
          </span>
        </div>
        
        <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white font-display mt-1 mb-3">
          ABOUT ONYX
        </h2>
        
        <div className="h-1.5 w-20 bg-[#E50914] mx-auto mb-8 rounded-full shadow-[0_0_12px_#E50914]" />

        {/* Premium Eye-Catching Content Card */}
        <div className="bg-[#0D0D0D] border border-[#1F1F1F] hover:border-[#E50914]/40 p-8 sm:p-12 rounded-3xl shadow-2xl text-left space-y-6 relative overflow-hidden transition-colors duration-500">
          
          {/* Top Red Bar Accent */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#E50914] via-[#FF3B47] to-[#E50914]" />

          <p className="text-zinc-100 text-lg sm:text-2xl font-bold leading-relaxed font-display">
            ONYX The Professional Fitness Studio is a focused training space combining <span className="text-white border-b-2 border-[#E50914]">Gym Access</span>, <span className="text-white border-b-2 border-[#E50914]">Personal Training</span> and <span className="text-white border-b-2 border-[#E50914]">Pilates</span> under one roof.
          </p>

          <div className="h-px bg-gradient-to-r from-[#1F1F1F] via-[#E50914]/30 to-[#1F1F1F] my-4" />

          <p className="text-zinc-300 text-base sm:text-lg leading-relaxed font-medium">
            Our goal is simple — provide professional guidance, quality training and an environment where you can train consistently.
          </p>

          {/* Clean 3-Key Features Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-[#1F1F1F]">
            <div className="flex items-center space-x-3 bg-[#050505] border border-[#1F1F1F] p-3.5 rounded-xl">
              <ShieldCheck className="w-5 h-5 text-[#E50914] flex-shrink-0" />
              <span className="text-xs font-bold text-white uppercase tracking-wider">Professional Guidance</span>
            </div>
            
            <div className="flex items-center space-x-3 bg-[#050505] border border-[#1F1F1F] p-3.5 rounded-xl">
              <Target className="w-5 h-5 text-[#E50914] flex-shrink-0" />
              <span className="text-xs font-bold text-white uppercase tracking-wider">Quality Training</span>
            </div>

            <div className="flex items-center space-x-3 bg-[#050505] border border-[#1F1F1F] p-3.5 rounded-xl">
              <Zap className="w-5 h-5 text-[#E50914] flex-shrink-0" />
              <span className="text-xs font-bold text-white uppercase tracking-wider">Consistent Progress</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
