import React, { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, ShieldCheck } from 'lucide-react';

export const CoachingTeam: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const team = [
    {
      id: 'karunesh',
      name: 'MR. KARUNESH',
      role: 'FOUNDER',
      imagePlaceholderUrl: '/assets/onyx_founder_karunesh.jpg',
      isFounder: true
    },
    {
      id: 'venky',
      name: 'VENKY',
      role: 'Certified Trainer',
      imagePlaceholderUrl: '/assets/onyx_coach_venky.jpg'
    },
    {
      id: 'shiva',
      name: 'SHIVA',
      role: 'Certified Trainer',
      imagePlaceholderUrl: '/assets/onyx_coach_shiva.jpg'
    },
    {
      id: 'prashanth',
      name: 'PRASHANTH',
      role: 'Certified Trainer',
      imagePlaceholderUrl: '/assets/onyx_coach_prashanth.jpg'
    },
    {
      id: 'sai',
      name: 'SAI',
      role: 'Certified Trainer',
      imagePlaceholderUrl: '/assets/onyx_coach_sai.jpg'
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
      scrollContainerRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  return (
    <section id="team" className="py-14 relative bg-[#0D0D0D] border-t border-[#1F1F1F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
          <div>
            <div className="inline-flex items-center space-x-2 bg-[#E50914]/10 border border-[#E50914]/40 rounded-full px-4 py-1.5 mb-2">
              <ShieldCheck className="w-3.5 h-3.5 text-[#E50914]" />
              <span className="text-xs font-black uppercase tracking-[0.2em] text-[#E50914] font-display">
                CERTIFIED TRAINERS
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-white font-display">
              CERTIFIED TRAINERS
            </h2>
            <p className="text-zinc-300 text-sm font-medium mt-1">
              Professional guidance from certified trainers who help you train safely, consistently and effectively.
            </p>
          </div>

          {/* Controls */}
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
        <div className="mb-8 bg-[#050505] border border-[#1F1F1F] rounded-2xl overflow-hidden shadow-2xl relative group">
          <div className="relative h-64 sm:h-80 w-full overflow-hidden">
            <img
              src="/assets/onyx_team_group.jpg"
              alt="The ONYX Coaching Team"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-all duration-700 opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-85" />
            
            <div className="absolute bottom-5 left-5 right-5 text-left">
              <h3 className="text-xl sm:text-3xl font-black uppercase text-white font-display">
                ONYX CERTIFIED INSTRUCTORS
              </h3>
              <p className="text-zinc-300 text-xs sm:text-sm">
                Dedicated coaching staff providing expert instruction on the gym floor and Pilates studio.
              </p>
            </div>
          </div>
        </div>

        {/* Simplified Trainer Cards */}
        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto space-x-6 scrollbar-none snap-x snap-mandatory pb-4 pt-2 -mx-4 px-4 sm:mx-0 sm:px-0 scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {team.map((coach) => (
            <div
              key={coach.id}
              className="snap-start flex-shrink-0 w-64 sm:w-72 bg-[#050505] border border-[#1F1F1F] hover:border-[#E50914] rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 group hover:-translate-y-1.5 flex flex-col justify-between"
            >
              {/* Photo Area */}
              <div className="relative h-72 overflow-hidden bg-[#121212]">
                <img
                  src={coach.imagePlaceholderUrl}
                  alt={coach.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-all duration-700 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-85" />
              </div>

              {/* Card Body */}
              <div className="p-5 text-center">
                <h3 className="text-xl font-black uppercase text-white font-display group-hover:text-[#E50914] transition-colors">
                  {coach.name}
                </h3>
                <div className="text-xs font-bold uppercase tracking-wider text-[#E50914] mt-1">
                  {coach.role}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Progress Bar */}
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
