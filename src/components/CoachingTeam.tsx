import React, { useRef, useState } from 'react';
import { Award, ShieldCheck, Users, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { Trainer } from '../types';

export const CoachingTeam: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const team: (Trainer & { isFounder?: boolean })[] = [
    {
      id: 'karunesh',
      name: 'MR. KARUNESH',
      role: 'FOUNDER & CEO | HEAD COACH',
      experienceYears: 14,
      certifications: ['GGFI Certified Master', 'Pilates Specialist (2019)'],
      specializations: ['Strength & Conditioning', 'Reformer Pilates', 'Rehabilitation'],
      imagePlaceholderUrl: '/assets/onyx_founder_karunesh.jpg',
      isFounder: true
    },
    {
      id: 'venky',
      name: 'VENKY',
      role: 'Fitness Coach',
      experienceYears: 4,
      certifications: ['GGFI Certified'],
      specializations: ['Strength & Conditioning', 'Body Transformation', 'Hypertrophy'],
      imagePlaceholderUrl: '/assets/onyx_coach_venky.jpg'
    },
    {
      id: 'shiva',
      name: 'SHIVA',
      role: 'Fitness Coach',
      experienceYears: 4,
      certifications: ['GGFI Certified'],
      specializations: ['Fat Loss Blueprinting', 'Functional Training', 'Strength'],
      imagePlaceholderUrl: '/assets/onyx_coach_shiva.jpg'
    },
    {
      id: 'prashanth',
      name: 'PRASHANTH',
      role: 'Fitness Coach',
      experienceYears: 3,
      certifications: ['GGFI Certified'],
      specializations: ['Personal Training', 'Conditioning', 'Form Correction'],
      imagePlaceholderUrl: '/assets/onyx_coach_prashanth.jpg'
    },
    {
      id: 'sai',
      name: 'SAI',
      role: 'Pilates Trainer',
      experienceYears: 2,
      certifications: ['GGFI Certified'],
      specializations: ['Reformer Pilates', 'Mat Pilates', 'Core & Mobility'],
      imagePlaceholderUrl: '/assets/onyx_coach_sai.jpg',
      isPilates: true
    }
  ];

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      const totalScrollable = scrollWidth - clientWidth;
      if (totalScrollable > 0) {
        setScrollProgress(scrollLeft / totalScrollable);
      }
    }
  };

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -340, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 340, behavior: 'smooth' });
    }
  };

  return (
    <section id="team" className="py-14 relative bg-[#0D0D0D] border-t border-[#1F1F1F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
          <div>
            <div className="inline-flex items-center space-x-2 bg-[#E50914]/10 border border-[#E50914]/40 rounded-full px-4 py-1.5 mb-2">
              <Sparkles className="w-3.5 h-3.5 text-[#E50914]" />
              <span className="text-xs font-black uppercase tracking-[0.2em] text-[#E50914] font-display">
                EXPERT INSTRUCTORS
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-white font-display">
              THE ONYX COACHING ROSTER
            </h2>
            <p className="text-zinc-300 text-sm font-medium mt-1">
              Swipe left or right to explore our team of GGFI certified trainers & Pilates specialists.
            </p>
          </div>

          {/* Swipe Left/Right Controls */}
          <div className="flex items-center space-x-3 mt-4 md:mt-0">
            <button
              onClick={scrollLeft}
              className="p-3 bg-[#050505] hover:bg-[#E50914] text-white rounded-full border border-[#1F1F1F] hover:border-[#E50914] transition-all duration-300 shadow-lg"
              aria-label="Swipe left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={scrollRight}
              className="p-3 bg-[#050505] hover:bg-[#E50914] text-white rounded-full border border-[#1F1F1F] hover:border-[#E50914] transition-all duration-300 shadow-lg"
              aria-label="Swipe right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Group Photo Feature Banner */}
        <div className="mb-10 bg-[#050505] border border-[#1F1F1F] rounded-2xl overflow-hidden shadow-2xl relative group">
          <div className="relative h-64 sm:h-80 w-full overflow-hidden">
            <img
              src="/assets/onyx_team_group.jpg"
              alt="The ONYX Coaching Team led by Founder Mr. Karunesh"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-all duration-700 opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-85" />
            
            <div className="absolute bottom-5 left-5 right-5 text-left">
              <div className="inline-flex items-center space-x-2 bg-[#E50914] text-white text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded mb-2 font-display">
                <Users className="w-3.5 h-3.5" />
                <span>OFFICIAL ONYX STAFF & INSTRUCTORS</span>
              </div>
              <h3 className="text-xl sm:text-3xl font-black uppercase text-white font-display">
                UNITED BY EXCELLENCE & DISCIPLINE
              </h3>
              <p className="text-zinc-300 text-xs sm:text-sm">
                Led by Founder & CEO Mr. Karunesh alongside expert GGFI certified fitness coaches in S.R. Nagar.
              </p>
            </div>
          </div>
        </div>

        {/* Horizontal Swipeable Trainer Cards Carousel */}
        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto space-x-6 scrollbar-none snap-x snap-mandatory pb-4 pt-2 -mx-4 px-4 sm:mx-0 sm:px-0 scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {team.map((coach) => (
            <div
              key={coach.id}
              className="snap-start flex-shrink-0 w-80 sm:w-84 bg-[#050505] border border-[#1F1F1F] hover:border-[#E50914] rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 group hover:-translate-y-1.5 flex flex-col justify-between"
            >
              {/* Photo Area */}
              <div className="relative h-72 overflow-hidden bg-[#121212]">
                <img
                  src={coach.imagePlaceholderUrl}
                  alt={coach.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-all duration-700 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-85" />
                
                {/* Founder Badge */}
                {coach.isFounder && (
                  <div className="absolute top-3 left-3 bg-[#E50914] text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded shadow-red-glow font-display">
                    FOUNDER & CEO
                  </div>
                )}

                {/* Experience Badge */}
                {!coach.isFounder && (
                  <div className="absolute top-3 left-3 bg-[#E50914] text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded shadow font-display">
                    {coach.experienceYears} Years Exp
                  </div>
                )}

                {/* Pilates Badge */}
                {coach.isPilates && (
                  <div className="absolute top-3 right-3 bg-zinc-900 border border-[#E50914] text-white text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded shadow font-display">
                    Pilates Specialist
                  </div>
                )}
              </div>

              {/* Card Body */}
              <div className="p-5 text-left flex-grow flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-xl font-black uppercase text-white font-display group-hover:text-[#E50914] transition-colors">
                    {coach.name}
                  </h3>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#E50914] mb-3">
                    {coach.role}
                  </div>

                  {/* Certifications */}
                  <div className="mb-3">
                    <div className="text-[11px] uppercase font-bold text-zinc-400 tracking-wider mb-1 flex items-center">
                      <ShieldCheck className="w-3.5 h-3.5 mr-1 text-[#E50914]" /> Certifications
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {coach.certifications.map((c, idx) => (
                        <span key={idx} className="text-[10px] uppercase font-bold bg-[#121212] border border-[#1F1F1F] px-2 py-0.5 rounded text-zinc-200">
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Focus Areas */}
                  <div>
                    <div className="text-[11px] uppercase font-bold text-zinc-400 tracking-wider mb-1 flex items-center">
                      <Award className="w-3.5 h-3.5 mr-1 text-[#E50914]" /> Focus Areas
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {coach.specializations.map((spec, i) => (
                        <span key={i} className="text-[10px] uppercase tracking-wider font-semibold bg-[#0D0D0D] border border-[#1F1F1F] px-2 py-0.5 rounded text-zinc-300">
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Carousel Progress Scroll Indicator Bar */}
        <div className="w-full bg-[#1F1F1F] h-1 rounded-full mt-4 overflow-hidden">
          <div
            className="bg-[#E50914] h-full transition-all duration-150"
            style={{ width: `${Math.max(20, scrollProgress * 100)}%` }}
          />
        </div>

      </div>
    </section>
  );
};
