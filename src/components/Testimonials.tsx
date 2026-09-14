import React from 'react';
import { Star, Quote, ShieldCheck } from 'lucide-react';
import { Testimonial } from '../types';

export const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: '1',
      name: 'Ketan Patel',
      program: 'Personal Training & Pilates',
      quote: 'The personal training at ONYX is unlike any other gym in Hyderabad. The attention to posture, biomechanics, and form completely changed how I work out. The Pilates reformer sessions fixed my lower back stiffness within weeks.',
      rating: 5,
      duration: 'Member since 2024'
    },
    {
      id: '2',
      name: 'Ananya Reddy',
      program: 'ONYX Hybrid Program',
      quote: 'Combining Reformer Pilates with gym weight training was the best decision. The studio environment is clean, professional, and free from crowd chaos. The trainers know exactly how to push you safely.',
      rating: 5,
      duration: 'Member since 2023'
    },
    {
      id: '3',
      name: 'Vikram Teja',
      program: 'Small Group Transformation',
      quote: 'The 55-minute transformation batch is super active and intense. Having only 4 members in our batch meant the coach watched every single rep. Dropped body fat and gained serious strength.',
      rating: 5,
      duration: 'Member since 2024'
    }
  ];

  return (
    <section id="testimonials" className="py-14 relative bg-[#050505] overflow-hidden border-t border-[#1F1F1F]">
      {/* Ambient Red Glow */}
      <div className="ambient-glow-left" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-black uppercase tracking-[0.25em] text-[#E50914] font-display">
            REAL MEMBER PROOF
          </span>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white font-display mt-1">
            VERBATIM MEMBER EXPERIENCES
          </h2>
          <div className="h-1.5 w-16 bg-[#E50914] mx-auto my-3 rounded-full" />
          <p className="text-zinc-200 text-base sm:text-lg">
            Read unedited feedback directly from ONYX members who train in our S.R. Nagar studio.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-[#0D0D0D] border border-[#1F1F1F] hover:border-[#E50914] rounded-2xl p-8 shadow-2xl flex flex-col justify-between transition-all duration-300 group hover:-translate-y-1"
            >
              <div>
                {/* Rating Stars */}
                <div className="flex items-center space-x-1.5 mb-5">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#E50914] text-[#E50914]" />
                  ))}
                </div>

                {/* Quote Icon */}
                <Quote className="w-9 h-9 text-[#E50914]/40 mb-3 group-hover:text-[#E50914] transition-colors" />

                {/* Verbatim Text */}
                <p className="text-zinc-200 text-sm sm:text-base leading-relaxed italic mb-6">
                  "{t.quote}"
                </p>
              </div>

              {/* Author Footer */}
              <div className="pt-4 border-t border-[#121212] flex items-center justify-between">
                <div>
                  <div className="text-base font-black uppercase text-white font-display">
                    {t.name}
                  </div>
                  <div className="text-xs font-bold text-[#E50914] uppercase tracking-wider">
                    {t.program}
                  </div>
                </div>
                <div className="text-xs text-zinc-400 font-mono">
                  {t.duration}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
