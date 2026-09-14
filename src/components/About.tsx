import React from 'react';
import { ShieldAlert, Zap, Target, Activity, RefreshCw, CheckCircle2 } from 'lucide-react';

export const About: React.FC = () => {
  const pillars = [
    { title: 'Strength Training', desc: 'Progressive overload protocols designed to build lean muscle mass, power, and structural integrity.' },
    { title: 'Conditioning', desc: 'High-efficiency metabolic conditioning workouts that improve cardiovascular stamina and fat oxidation.' },
    { title: 'Personal Training', desc: 'Tailored 1-to-1 coaching crafted around your biomechanics, lifestyle schedule, and individual goals.' },
    { title: 'Mat & Reformer Pilates', desc: 'Precision movement work focused on core stability, spinal alignment, posture, and deep tissue strength.' },
    { title: 'Mobility & Flexibility', desc: 'Targeted joint capsule opening and active range of motion training to keep you moving pain-free.' },
    { title: 'Movement & Rehabilitation', desc: 'Movement improvement drills to correct imbalances, support post-injury recovery, and optimize form.' }
  ];

  return (
    <section id="about" className="py-14 relative overflow-hidden bg-[#050505] border-t border-[#1F1F1F]">
      {/* Background Glow */}
      <div className="ambient-glow-left" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Editorial Text & Philosophy */}
          <div className="lg:col-span-6 space-y-5 text-left">
            <div className="inline-flex items-center space-x-2 bg-[#0D0D0D] border border-[#E50914]/40 px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest text-[#E50914]">
              <span>THE ONYX PHILOSOPHY</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white font-display leading-tight">
              MORE THAN A GYM. <br />
              <span className="text-[#E50914]">AN EXPERIENCE AT THE GYM.</span>
            </h2>

            <p className="text-zinc-200 text-base sm:text-lg leading-relaxed">
              ONYX combines high-performance strength equipment, Reformer & Mat Pilates, personalized 1-on-1 coaching, and injury rehabilitation under one roof in S.R. Nagar, Hyderabad.
            </p>

            {/* Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center space-x-2.5 text-sm font-bold text-zinc-100">
                <CheckCircle2 className="w-4 h-4 text-[#E50914]" />
                <span>Certified GGFI Master Coaches</span>
              </div>
              <div className="flex items-center space-x-2.5 text-sm font-bold text-zinc-100">
                <CheckCircle2 className="w-4 h-4 text-[#E50914]" />
                <span>Dedicated Reformer Pilates Studio</span>
              </div>
              <div className="flex items-center space-x-2.5 text-sm font-bold text-zinc-100">
                <CheckCircle2 className="w-4 h-4 text-[#E50914]" />
                <span>Posture & Movement Correction</span>
              </div>
              <div className="flex items-center space-x-2.5 text-sm font-bold text-zinc-100">
                <CheckCircle2 className="w-4 h-4 text-[#E50914]" />
                <span>Focused, Uncrowded Floor Space</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive 6-Pillar Grid */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pillars.map((item, idx) => (
              <div
                key={idx}
                className="p-5 bg-[#0D0D0D] border border-[#1F1F1F] rounded-xl hover:border-[#E50914] transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="w-9 h-9 rounded-lg bg-[#E50914]/15 border border-[#E50914]/40 flex items-center justify-center text-[#E50914] mb-3 group-hover:scale-110 transition-transform">
                  <Activity className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-black uppercase text-white mb-2 group-hover:text-[#E50914] transition-colors font-display">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
