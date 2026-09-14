import React from 'react';
import { Award, Calendar, CheckCircle, ShieldCheck } from 'lucide-react';

export const Founder: React.FC = () => {
  return (
    <section className="py-14 relative overflow-hidden bg-[#050505]">
      {/* Background Radial Glow */}
      <div className="ambient-glow-right" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-[#0D0D0D] border border-[#1F1F1F] rounded-3xl p-8 sm:p-12 shadow-2xl overflow-hidden relative">
          
          {/* Top Red Edge Accent */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#E50914]" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Photo Container with Official Portrait */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="relative w-full max-w-md h-[440px] rounded-2xl overflow-hidden bg-[#121212] border-2 border-[#1F1F1F] shadow-2xl group">
                <img
                  src="/assets/onyx_founder_karunesh.jpg"
                  alt="Mr. Karunesh - Founder & CEO"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-transparent to-transparent opacity-80" />
                
                <div className="absolute bottom-5 left-5 right-5 text-left">
                  <div className="text-2xl font-black uppercase text-white font-display tracking-wide">
                    MR. KARUNESH
                  </div>
                  <div className="text-sm font-bold uppercase tracking-wider text-[#E50914]">
                    Founder & CEO | GGFI Certified Head Coach
                  </div>
                </div>
              </div>
            </div>

            {/* Right Information & Bio */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div>
                <span className="text-xs font-black uppercase tracking-[0.25em] text-[#E50914] font-display">
                  FOUNDER & CEO
                </span>
                <h2 className="text-3xl sm:text-5xl font-black uppercase text-white font-display mt-1">
                  MR. KARUNESH
                </h2>
                <div className="text-base font-bold text-zinc-300 uppercase tracking-wider mt-1">
                  Founder & CEO • GGFI Certified Master Coach
                </div>
              </div>

              <p className="text-zinc-200 text-base sm:text-lg leading-relaxed font-normal">
                With a distinguished fitness coaching journey starting in 2012, Mr. Karunesh has dedicated over a decade to mastering human physical performance, strength conditioning, and injury-free movement protocols.
              </p>

              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                Recognizing the critical necessity of postural correction, spinal alignment, and joint health, he expanded into Pilates instruction in 2019. At ONYX, Mr. Karunesh combines high-performance strength training with Mat & Reformer Pilates to deliver sustainable physical transformations.
              </p>

              {/* Verified Credentials Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 bg-[#050505] border border-[#1F1F1F] rounded-xl flex items-center space-x-3.5">
                  <Calendar className="w-6 h-6 text-[#E50914] flex-shrink-0" />
                  <div>
                    <div className="text-sm font-bold text-white">Trainer Since 2012</div>
                    <div className="text-xs text-zinc-400">14+ Years Coaching Legacy</div>
                  </div>
                </div>

                <div className="p-4 bg-[#050505] border border-[#1F1F1F] rounded-xl flex items-center space-x-3.5">
                  <Award className="w-6 h-6 text-[#E50914] flex-shrink-0" />
                  <div>
                    <div className="text-sm font-bold text-white">Pilates Specialist (2019)</div>
                    <div className="text-xs text-zinc-400">Mat & Reformer Pilates Expert</div>
                  </div>
                </div>

                <div className="p-4 bg-[#050505] border border-[#1F1F1F] rounded-xl flex items-center space-x-3.5">
                  <ShieldCheck className="w-6 h-6 text-[#E50914] flex-shrink-0" />
                  <div>
                    <div className="text-sm font-bold text-white">GGFI Certified Coach</div>
                    <div className="text-xs text-zinc-400">Verified Fitness Credential</div>
                  </div>
                </div>

                <div className="p-4 bg-[#050505] border border-[#1F1F1F] rounded-xl flex items-center space-x-3.5">
                  <CheckCircle className="w-6 h-6 text-[#E50914] flex-shrink-0" />
                  <div>
                    <div className="text-sm font-bold text-white">Rehab & Movement</div>
                    <div className="text-xs text-zinc-400">Postural & Joint Recovery</div>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
